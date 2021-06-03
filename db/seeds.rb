# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

User.create(
  email: 'demo@user.com',
  password: 123456,
  first_name: 'Demo',
  last_name: 'User',
  birth_date: Faker::Date.birthday(min_age: 18, max_age: 65),
  gender: Faker::Gender.binary_type,
  work: Faker::Company.name,
  school: Faker::University.name,
  biography: Faker::Job.title
)

users = []

10.times do
  users << User.create(
    email: Faker::Internet.unique.email,
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