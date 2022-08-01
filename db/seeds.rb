require 'faker'

Article.create(title: "Land a job", author: "Norah", description: "This is an article to help us get a job", image: "", category: "Tech")

User.create(first_name: "John", last_name: "Tony", username: "Johnnyboy")
User.create(first_name:Faker::name.first_name, last_name:Faker::name.last_name, username:Faker.name::username)
