# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "robert", password: "password")
Track.create(title: "Insane", artist_id: 1, album_id: 1, track_url: "abc", cover_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Flume_album_artwork.jpg")
Track.create(title: "On Top", artist_id: 1, album_id: 1, track_url: "def", cover_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Flume_album_artwork.jpg")
Track.create(title: "Sintra", artist_id: 1, album_id: 1, track_url: "jkl", cover_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Flume_album_artwork.jpg")
Track.create(title: "Bring You Down", artist_id: 1, album_id: 1, track_url: "ghi", cover_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Flume_album_artwork.jpg")
Track.create(title: "Left Alone", artist_id: 1, album_id: 1, track_url: "mno", cover_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Flume_album_artwork.jpg")
Track.create(title: "Warm Thoughts", artist_id: 1, album_id: 1, track_url: "pqr", cover_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Flume_album_artwork.jpg")
Track.create(title: "Shameless", artist_id: 2, album_id: 2, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478372611/08_Shameless_o8jp5a.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478375780/99bf5594_yxka4k.jpg")
Artist.create(name: "Flume", artist_img_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478483651/flume_cfffiq.jpg")
Artist.create(name: "The Weeknd", artist_img_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478483658/the-weeknd-bw_yntuy3.jpg")
Album.create(title: "Flume (2012)", genre: "Electronic", artist_id: 1, cover_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Flume_album_artwork.jpg")
Album.create(title: "Beauty Behind the Madness", genre: "Electronic R&B", artist_id: 2, cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478375780/99bf5594_yxka4k.jpg")
