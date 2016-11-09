# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "guest", password: "password")
Track.create(title: "Shameless", artist_id: 2, album_id: 2, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478372611/08_Shameless_o8jp5a.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478375780/99bf5594_yxka4k.jpg")
Track.create(title: "Intro (original mix)", artist_id: 2, album_id: 2, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478714544/7903339_Intro_Original_Mix_maxbyl.wav", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478714712/0ac72fbd02d03a8d2556e77e9e31ef18_ca0icw.jpg")
Artist.create(name: "Flume", artist_img_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478483651/flume_cfffiq.jpg")
Artist.create(name: "The Weeknd", artist_img_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478537633/the_weeknd_mplelv.jpg")
Album.create(title: "Flume (2012)", genre: "Electronic", artist_id: 1, cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478483919/Flume_album_artwork_atvlzb.jpg")
Album.create(title: "Beauty Behind the Madness", genre: "Electronic R&B", artist_id: 2, cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478375780/99bf5594_yxka4k.jpg")
