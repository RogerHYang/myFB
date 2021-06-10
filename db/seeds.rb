# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


filenames = [
  ['owl-6310386_166.jpg', 'forest-1072828_1280.jpg'],
  ['fox-715588_166.jpg','wintry-2993370_1280.jpg'],
  ['squirrel-2148641_166.jpg','fall-3089995_1280.jpg'],
  ['racoon-5400581_166.jpg','forest-602880_1280.jpg'],
  ['red-panda-1852830_166.jpg','forest-931706_1280.jpg'],
  # ['moth_166.jpg','landscape-2256585_1280.jpg'],
  ['beaver-1448389_166.jpg','forest-3194475_1280.jpg'],
]

ActiveRecord::Base.transaction do
  Connection.delete_all
  User.delete_all
  
  users = []

  (0...filenames.size).map do |i|
    users << User.create!(
      email: i == 0 ? 'demo@user.com' : Faker::Internet.unique.email,
      password: 123456,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      birth_date: Faker::Date.birthday(min_age: 18, max_age: 65),
      gender: Faker::Gender.binary_type,
      work: Faker::Company.name,
      school: Faker::University.name,
      biography: Faker::Job.title
    )

    if Rails.env.production?
      basename = File.basename(ActionController::Base.helpers.asset_path(filenames[i][0]))
      file = Rails.root.join("public", "assets", "seeds", basename)
    else
      file = Rails.root.join("app", "assets", "images", "seeds", filenames[i][0])
    end
    
    users[i].profile_picture.attach(io: File.open(file), filename: filenames[i][0])

    if Rails.env.production?
      basename = File.basename(ActionController::Base.helpers.asset_path(filenames[i][1]))
      file = Rails.root.join("public", "assets", "seeds", basename)
    else
      file = Rails.root.join("app", "assets", "images", "seeds", filenames[i][1])
    end
    
    users[i].cover_photo.attach(io: File.open(file), filename: filenames[i][1])
  end

  100.times do |i|
    users << User.create!(
      email: SecureRandom.urlsafe_base64,
      password: 123456,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      birth_date: Faker::Date.birthday(min_age: 18, max_age: 65),
      gender: Faker::Gender.binary_type,
      work: Faker::Company.name,
      school: Faker::University.name,
      biography: Faker::Job.title
    )
  end

  users = User.all

  (0...users.size-1).each do |i|
    (i+1...users.size).each do |j|
      if users[i].profile_picture.attached? && users[j].profile_picture.attached?
        bound = 30
      else
        bound = 100
      end
      case rand(bound)
      when 0...10
        Connection.create!(from_user_id: users[i].id, to_user_id: users[j].id, status: Connection::ACCEPTED)
        Connection.create!(from_user_id: users[j].id, to_user_id: users[i].id, status: Connection::ACCEPTED)
      when 10...20
        Connection.create!(from_user_id: users[i].id, to_user_id: users[j].id, status: Connection::PENDING)
      when 20...30
        Connection.create!(from_user_id: users[j].id, to_user_id: users[i].id, status: Connection::PENDING)
      when 30...40
        Connection.create!(from_user_id: users[i].id, to_user_id: users[j].id, status: Connection::REJECTED)
      when 40...50
        Connection.create!(from_user_id: users[j].id, to_user_id: users[i].id, status: Connection::REJECTED)
      end
    end
  end
end