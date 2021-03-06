# == Schema Information
#
# Table name: artists
#
#  id             :integer          not null, primary key
#  name           :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  artist_img_url :string
#

class Artist < ActiveRecord::Base

  validates :name, :artist_img_url, presence: true

  has_many :tracks,
    class_name: :Track,
    primary_key: :id,
    foreign_key: :artist_id

  has_many :albums,
    class_name: :Album,
    primary_key: :id,
    foreign_key: :artist_id
end
