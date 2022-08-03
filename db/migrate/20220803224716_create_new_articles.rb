class CreateNewArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :new_articles do |t|
      t.string :title
      t.string :author
      t.text :description
      t.string :image
      t.string :category
      t.date :published_at
      t.string :url
      t.boolean :favorite

      t.timestamps
    end
  end
end
