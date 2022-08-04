class AddUserIdToNewArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :new_articles, :user_id, :integer 

  end
end
