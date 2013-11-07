class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :url
      t.string :body
      t.integer :upvotes
      t.integer :downvotes

      t.timestamps
    end
  end
end
