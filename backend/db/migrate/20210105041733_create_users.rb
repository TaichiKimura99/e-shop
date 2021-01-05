class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.date :birthday
      t.integer :gender
      t.string :token
      t.boolean :admin
      t.boolean :childmode

      t.timestamps
    end
  end
end
