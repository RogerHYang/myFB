class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.references :user, null: false, foreign_key: { to_table: :users }, index: true
      t.references :likeable, null: false, polymorphic: true, index: true
    end
    add_index :likes, [:user_id, :likeable_id, :likeable_type], unique: true
    add_index :likes, [:user_id, :likeable_type]
  end
end
