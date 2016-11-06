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

  belongs_to :artist
end
