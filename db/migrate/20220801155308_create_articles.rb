class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :author
      t.text :description
      t.string :image
      t.string :category
      t.date :published_at

      t.timestamps
    end
  end
end
