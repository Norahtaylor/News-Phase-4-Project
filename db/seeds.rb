require 'faker'

puts "🌱 Seeding spices..."

5.times do
    first_name = Faker::Name.unique.first_name
    last_name= Faker::Name.unique.last_name
    username= Faker::Name.unique.first_name
    User.create(username: username, first_name: first_name, last_name:last_name)
end 

15.times do 
    title = Faker::Marketing.buzzwords
    author= Faker::Name.unique.name 
    description=Faker::Quote.most_interesting_man_in_the_world
    published_at= Faker::Date.between(from: '2001-09-23', to: '2022-08-01')
    Article.create(title: title, author: author, description: description, published_at: published_at)
end 

puts "✅ Done seeding!"
