class ArtistImages < ActiveRecord::Migration
  def change

    add_column :artists, :artist_img_url, :string
  end
end
