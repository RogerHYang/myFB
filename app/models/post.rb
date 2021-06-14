class Post < ApplicationRecord
  validates :content, :author_id, :recipient_id, presence: true

  belongs_to :recipient,
    class_name: 'User',
    foreign_key: :recipient_id

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id
end