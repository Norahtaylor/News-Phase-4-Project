class AddLinkAndFavoriteToPets < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :url, :string
    add_column :articles, :favorite, :boolean 
  end
end
