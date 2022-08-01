# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Article.create(title: "Land a job", author: "Norah", description: "This is an article to help us get a job", image: "", category: "Tech")

User.create(first_name: "John", last_name: "Tony", username: "Johnnyboy")
