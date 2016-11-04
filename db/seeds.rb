# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "robert", password: "password")
Track.create(title: "Insane", track_url: "abc", cover_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Flume_album_artwork.jpg")
Track.create(title: "On Top", track_url: "def", cover_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Flume_album_artwork.jpg")
