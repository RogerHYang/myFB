class CreatePosts < ActiveRecord::Migration[5.2]
  def change    
    create_table :posts do |t|
      t.text :content, null: false
      t.references :author, null: false, foreign_key: { to_table: :users }, index: true
      t.references :recipient, null: false, foreign_key: { to_table: :users }, index: true
      t.timestamps
    end
  end
end
