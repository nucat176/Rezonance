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
Track.create(title: "Sintra", track_url: "jkl", cover_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Flume_album_artwork.jpg")
Track.create(title: "Bring You Down", track_url: "ghi", cover_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Flume_album_artwork.jpg")
Track.create(title: "Left Alone", track_url: "mno", cover_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Flume_album_artwork.jpg")
Track.create(title: "Warm Thoughts", track_url: "pqr", cover_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Flume_album_artwork.jpg")
Track.create(title: "Shameless", track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478372611/08_Shameless_o8jp5a.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478375780/99bf5594_yxka4k.jpg")
