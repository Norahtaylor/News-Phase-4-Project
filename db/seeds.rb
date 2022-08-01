require 'faker'

# Article.create(title: "Land a job", author: "Norah", description: "This is an article to help us get a job", image: "", category: "Tech")

# User.create(first_name: "John", last_name: "Tony", username: "Johnnyboy")
# 50.times do
#     first_name = Faker::Name.unique.name
#     last_name= Faker::Name.unique.name
#     username= Faker::Name.unique.name
#         # name = Faker::Name.unique.name
#     User.create(username: username, first_name: first_name, last_name:last_name)
 
# end 

50.times do 
    title = Faker::Marketing.buzzwords
    author= Faker::Name.unique.name 
    description=Faker::Quote.most_interesting_man_in_the_world
    published_at= Faker::Date.between(from: '2001-09-23', to: '2022-08-01')
    Article.create(title: title, author: author, description: description, published_at: published_at)
end 