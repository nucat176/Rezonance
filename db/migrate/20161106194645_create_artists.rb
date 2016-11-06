class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|

      t.string :name, null: false

      t.timestamps null: false
    end

    add_column :tracks, :artist_id, :integer
    add_column :tracks, :album_id, :integer
  end
end
