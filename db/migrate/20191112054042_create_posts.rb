class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :body
      t.integer :user_id, null: false
      t.string :post_type, null: false

      t.timestamps
    end
  end
end
