# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  genre      :string           not null
#  artist_id  :integer          not null
#  cover_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ActiveRecord::Base

  validates :title, :genre, :artist_id, :cover_url, null: false

  belongs_to :artist,
    class_name: :Artist,
    primary_key: :id,
    foreign_key: :artist_id

  has_many :tracks,
    class_name: :Track,
    primary_key: :id,
    foreign_key: :album_id


end
