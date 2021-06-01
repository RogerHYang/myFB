class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, index: { unique: true }
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.date :birth_date, null: false
      t.string :gender, null: false
      t.text :biography
      t.string :work
      t.string :school
      t.string :password_digest, null: false, index: { unique: true }
      t.string :session_token, null: false
      t.timestamps
    end
  end
end