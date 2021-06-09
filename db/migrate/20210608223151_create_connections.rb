class CreateConnections < ActiveRecord::Migration[5.2]
  def change    
    create_table :connections do |t|
      t.string :status, null: false
      t.references :from_user, null: false, foreign_key: { to_table: :users }, index: true
      t.references :to_user, null: false, foreign_key: { to_table: :users }, index: true
    end

    add_index :connections, [ :from_user_id, :to_user_id ], unique: true
  end
end
