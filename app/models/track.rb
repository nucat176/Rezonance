# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  track_url  :string           not null
#  cover_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  artist_id  :integer
#  album_id   :integer
#

class Track < ActiveRecord::Base

  validates :title, :track_url, :cover_url, presence: true

  belongs_to :artist,
    class_name: :Artist,
    primary_key: :id,
    foreign_key: :artist_id

  belongs_to :album,
    class_name: :Album,
    primary_key: :id,
    foreign_key: :album_id

end
