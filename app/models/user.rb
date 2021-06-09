require 'bcrypt'

class User < ApplicationRecord

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

  has_many :received_friend_requests,
    -> { merge(Connection.pending) },
    class_name: 'Connection',
    foreign_key: :to_user_id

  has_many :sent_friend_requests,
    -> { merge(Connection.not_accepted) },
    class_name: 'Connection',
    foreign_key: :from_user_id

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