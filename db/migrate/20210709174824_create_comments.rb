class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :content, null: false
      t.references :author, null: false, foreign_key: { to_table: :users }, index: true
      t.references :post, null: false, foreign_key: { to_table: :posts }, index: true
      t.references :parent_comment, null: true, foreign_key: { to_table: :comments }, index: true
      t.timestamps
    end
  end
end
