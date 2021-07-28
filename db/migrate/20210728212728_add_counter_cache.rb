class AddCounterCache < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :comments_count, :integer, null: false, default: 0
    add_column :posts, :likes_count, :integer, null: false, default: 0
    add_column :comments, :likes_count, :integer, null: false, default: 0
  end
end
