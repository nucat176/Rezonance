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

  validates :title, :track_url, :cover_url, :artist_id, :album_id, presence: true

  belongs_to :artist

end
