require 'bcrypt'

class User < ApplicationRecord

  validates :first_name, :last_name, presence: true
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true 
  validates :password, length: { minimum: 6 }, allow_nil: true
  attr_reader :password
  before_validation :ensure_session_token

  validates :biography, length: { maximum: 101 }, allow_nil: true
  validates :work, length: { maximum: 101 }, allow_nil: true
  validates :school, length: { maximum: 101 }, allow_nil: true

  has_one_attached :profile_picture
  has_one_attached :cover_photo
  
  has_many_attached :photos

  has_many :connections,
    class_name: 'Connection',
    foreign_key: :from_user_id

  has_many :friends,
    -> { merge(Connection.accepted) },
    through: :connections,
    source: :to_user

  has_many :friend_ids,
    -> { merge(Connection.accepted) },
    class_name: 'Connection',
    foreign_key: :from_user_id

  has_many :received_friend_requests,
    -> { merge(Connection.pending) },
    class_name: 'Connection',
    foreign_key: :to_user_id

  has_many :sent_friend_requests,
    -> { merge(Connection.not_accepted) },
    class_name: 'Connection',
    foreign_key: :from_user_id

  has_many :authored_posts,
    class_name: 'Post',
    foreign_key: :author_id
  
  has_many :received_posts,
    class_name: 'Post',
    foreign_key: :recipient_id

  has_many :news_feed_posts,
    class_name: 'Post',
    through: :friends,
    source: :authored_posts

  has_many :comments,
    class_name: "Comment",
    foreign_key: :author_id

  has_many :likes,
    dependent: :destroy

  has_many :liked_posts,
    through: :likes,
    source: :likeable,
    source_type: "Post"

  has_many :liked_comments,
    through: :likes,
    source: :likeable,
    source_type: "Comment"

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  private 

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end