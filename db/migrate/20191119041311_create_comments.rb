class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.string :user_id, null: false
      t.string :post_id, null: false

      t.timestamps
    end
  end
end
