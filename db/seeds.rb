# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
def quote()
  case rand(4)
  when 0
    return Faker::Quotes::Shakespeare.hamlet_quote
  when 1
    return Faker::Quotes::Shakespeare.as_you_like_it_quote
  when 2
    return Faker::Quotes::Shakespeare.king_richard_iii_quote
  when 3
    return Faker::Quotes::Shakespeare.romeo_and_juliet_quote 
  end
end

ActiveRecord::Base.transaction do
  Comment.delete_all
  Post.delete_all
  users = User.first(5)
  
  pairs = []
  (0...users.size).each do |i|
    (0...users.size).each do |j|
      pairs << [Faker::Time.backward(days: 180), i, j]
      if i == j
        2.times do
          pairs << [Faker::Time.backward(days: 180), i, j] 
        end
      end
    end
  end

  pairs.sort.each do |t, i, j|
    post = Post.create!(author_id: users[j].id, recipient_id: users[i].id, content: quote)
    post.update_attributes(created_at: t)
  end

  users = User.limit(10).order('id').includes(:authored_posts)
  posts = users.flat_map(&:authored_posts)

  comments = []

  (0...200).map do
    post = posts.sample
    t = Faker::Time.between(from: post.created_at, to: DateTime.now)
    [t, post]
  end.sort.each do |t, post|
    comments << Comment.create!(
      content: quote,
      author_id: users.sample.id,
      post_id: post.id
    )
    comments.last.update_attributes(created_at: t)
  end

  replies = []

  (0...200).map do
    comment = comments.sample
    t = Faker::Time.between(from: comment.created_at, to: DateTime.now)
    [t, comment]
  end.sort.each do |t, comment|
    replies << Comment.create!(
      content: quote,
      author_id: users.sample.id,
      post_id: comment.post_id,
      parent_comment_id: comment.id
    )
    replies.last.update_attributes(created_at: t)
  end

  (0...25).map do
    comment = replies.sample
    t = Faker::Time.between(from: comment.created_at, to: DateTime.now)
    [t, comment]
  end.sort.each do |t, comment|
    reply = Comment.create!(
      content: quote,
      author_id: users.sample.id,
      post_id: comment.post_id,
      parent_comment_id: comment.id
    )
    reply.update_attributes(created_at: t)
  end
end


# filenames = [
#   ['owl-6310386_166.jpg', 'forest-1072828_1280.jpg'],
#   ['fox-715588_166.jpg','wintry-2993370_1280.jpg'],
#   ['squirrel-2148641_166.jpg','fall-3089995_1280.jpg'],
#   ['racoon-5400581_166.jpg','forest-602880_1280.jpg'],
#   ['red-panda-1852830_166.jpg','forest-931706_1280.jpg'],
#   ['koala-4756184_166.jpg','landscape-2256585_1280.jpg'],
#   ['beaver-1448389_166.jpg','forest-3194475_1280.jpg'],
#   ['tiger-3715664_166.jpg','river-1866579_1920.jpg'],
#   ['sloth-731238_166.jpg','the-1865639_1920.jpg'],
#   ['black-69246_166.jpg','river-1246231_1920.jpg']
# ]

# ActiveRecord::Base.transaction do
#   Post.delete_all
#   Connection.delete_all
#   User.delete_all
  
#   users = []

#   (0...filenames.size).map do |i|
#     users << User.create!(
#       email: i == 0 ? 'demo@user.com' : Faker::Internet.unique.email,
#       password: 123456,
#       first_name: Faker::Name.first_name,
#       last_name: Faker::Name.last_name,
#       birth_date: Faker::Date.birthday(min_age: 18, max_age: 65),
#       gender: Faker::Gender.binary_type,
#       work: Faker::Company.name,
#       school: Faker::University.name,
#       biography: Faker::Job.title
#     )

#     if Rails.env.production?
#       basename = File.basename(ActionController::Base.helpers.asset_path(filenames[i][0]))
#       file = Rails.root.join("public", "assets", basename)
#     else
#       file = Rails.root.join("app", "assets", "images", filenames[i][0])
#     end
    
#     users[i].profile_picture.attach(io: File.open(file), filename: filenames[i][0])

#     if Rails.env.production?
#       basename = File.basename(ActionController::Base.helpers.asset_path(filenames[i][1]))
#       file = Rails.root.join("public", "assets", basename)
#     else
#       file = Rails.root.join("app", "assets", "images", filenames[i][1])
#     end
    
#     users[i].cover_photo.attach(io: File.open(file), filename: filenames[i][1])
#   end

#   10.times do |i|
#     users << User.create!(
#       email: SecureRandom.urlsafe_base64,
#       password: 123456,
#       first_name: Faker::Name.first_name,
#       last_name: Faker::Name.last_name,
#       birth_date: Faker::Date.birthday(min_age: 18, max_age: 65),
#       gender: Faker::Gender.binary_type,
#       work: Faker::Company.name,
#       school: Faker::University.name,
#       biography: Faker::Job.title
#     )
#   end

#   (0...users.size-1).each do |i|
#     (i+1...users.size).each do |j|
#       if users[i].profile_picture.attached? && users[j].profile_picture.attached?
#         bound = 20
#       else
#         bound = 50
#       end
#       case rand(bound)
#       when 0...20
#         Connection.create!(from_user_id: users[i].id, to_user_id: users[j].id, status: Connection::ACCEPTED)
#         Connection.create!(from_user_id: users[j].id, to_user_id: users[i].id, status: Connection::ACCEPTED)
#       when 20...35
#         Connection.create!(from_user_id: users[i].id, to_user_id: users[j].id, status: Connection::PENDING)
#       when 35...50
#         Connection.create!(from_user_id: users[j].id, to_user_id: users[i].id, status: Connection::PENDING)
#       when 50...55
#         Connection.create!(from_user_id: users[i].id, to_user_id: users[j].id, status: Connection::REJECTED)
#       when 55...60
#         Connection.create!(from_user_id: users[j].id, to_user_id: users[i].id, status: Connection::REJECTED)
#       end
#     end
#   end
  
#   (0...users.size).each do |i|
#     (i...users.size).each do |j|
#       case rand(4)
#       when 0
#         content = Faker::Quotes::Shakespeare.hamlet_quote
#       when 1
#         content = Faker::Quotes::Shakespeare.as_you_like_it_quote
#       when 2
#         content = Faker::Quotes::Shakespeare.king_richard_iii_quote
#       when 3
#         content = Faker::Hacker.say_something_smart
#       end
#       Post.create!(author_id: users[j].id, recipient_id: users[i].id, content: content)
#     end
#   end

#   users = User.first(10)

#   (0...users.size).each do |i|
#     (i...users.size).each do |j|
#       case rand(4)
#       when 0
#         content = Faker::Quotes::Shakespeare.hamlet_quote
#       when 1
#         content = Faker::Quotes::Shakespeare.as_you_like_it_quote
#       when 2
#         content = Faker::Quotes::Shakespeare.king_richard_iii_quote
#       when 3
#         content = Faker::Hacker.say_something_smart
#       end
#       Post.create!(author_id: users[j].id, recipient_id: users[i].id, content: content)
#     end
#   end
# end