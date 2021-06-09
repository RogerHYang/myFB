class Connection < ApplicationRecord
  ACCEPTED = 'ACCEPTED'
  REJECTED = 'REJECTED'
  PENDING = 'PENDING'

  scope :accepted, -> { where(status: Connection::ACCEPTED) }  
  scope :not_accepted, -> { where.not(status: Connection::ACCEPTED) }
  scope :pending, -> { where(status: Connection::PENDING) }
  scope :rejected, -> { where(status: Connection::REJECTED) }

  belongs_to :to_user,
    class_name: 'User',
    foreign_key: :to_user_id

  belongs_to :from_user,
    class_name: 'User',
    foreign_key: :from_user_id
end