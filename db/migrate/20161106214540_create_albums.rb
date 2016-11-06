class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|

      t.string :title, null: false
      t.string :genre, null: false
      t.integer :artist_id, null: false
      t.string :cover_url, null: false

      t.timestamps null: false
    end
  end
end
