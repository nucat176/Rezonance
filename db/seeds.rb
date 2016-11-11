# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "Guest", password: "password")
User.create(username: "nucat176", password: "password")
User.create(username: "Robert", password: "password")

Track.create(title: "Intro (original mix)", user_id: 2, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478714544/7903339_Intro_Original_Mix_maxbyl.wav", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478714712/0ac72fbd02d03a8d2556e77e9e31ef18_ca0icw.jpg")
Track.create(title: "Midnight City", user_id: 3, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478748936/zrpwse6nndwgkjrqfadq.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478748916/abuxismdendwxivigque.jpg")
Track.create(title: "Insane", user_id: 2, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478820820/Flume_-_Insane_feat._Moon_Holiday_kg3jfx.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478643562/ep6jjoxszmlfyrtfvbhe.jpg")
Track.create(title: "Dang!", user_id: 3, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478749431/fn4gviymi8iigxct16wy.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478749408/a7a2h3tfbkrllh9yp6fz.jpg")
Track.create(title: "Lofticries", user_id: 2, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478821325/Purity_Ring_-_Lofticries_HD_fvvsvh.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478821078/Purity_Ring_-_Shrines_album_cover__2012_evpor3.jpg")
Track.create(title: "Closer", user_id: 3, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478821705/The_Chainsmokers_-_Closer_ft._Halsey_dpmrcs.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478821617/closer1111_gev4ar.jpg")
Track.create(title: "Don't Let Me Down", user_id: 2, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478821961/The_Chainsmokers_-_Don_t_Let_Me_Down_Audio_ft._Daya_jzkc03.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478821985/Don_t_Let_Me_Down__featuring_Daya___Official_Single_Cover__by_The_Chainsmokers_avfse8.png")
Track.create(title: "Let Me Love You", user_id: 3, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478822180/DJ_Snake_ft._Justin_Bieber_-_Let_Me_Love_You_Lyric_Video_qstafc.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478822101/cd59234dade95974c644b48aae5131f5.1000x1000x1_zvpxye.jpg")
Track.create(title: "Outside", user_id: 2, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478822409/Calvin_Harris_-_Outside_ft_Ellie_Goulding_Lyrics_On_Screen_o1kesq.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478822319/Calvin_Harris_-_Motion_jplqgs.png")
Track.create(title: "Lean On", user_id: 3, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478822651/Major_Lazer_DJ_Snake_-_Lean_On_feat._M%C3%98_Official_Music_Video_flo3h1.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478822520/artworks-000108593302-0ek7n6-t500x500_rtn485.jpg")
Track.create(title: "Cold Water", user_id: 2, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478823846/Major_Lazer_-_Cold_Water_feat._Justin_Bieber_M%C3%98_Official_Lyric_Video_doipdj.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478823775/Cover1_4000x4000px_300dpi_rspurn.jpg")
Track.create(title: "Be Together", user_id: 3, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478824045/Major_Lazer_-_Be_Together_feat._Wild_Belle_Official_Lyric_Video_a995ll.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478823974/MajorLazerPeaceIstheMission_mh7iyi.png")
Track.create(title: "Take a Chance", user_id: 2, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478889910/Flume_-_Take_a_Chance_feat._Little_Dragon_v8f7ty.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478885606/Flume_-_Skin_ojweqx.png")
Track.create(title: "Modern Coversation", user_id: 3, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478886087/ZHU__Vancouver_Sleep_Clinic__Daniel_Johns_-_Modern_Conversation_Audio_hyeekv.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478885988/zhu-genesis-series-generation-why_o2o4du.jpg")
Track.create(title: "Spectrum", user_id: 2, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478886311/Zedd_-_Spectrum_Lyric_Video_ft._Matthew_Koma_rnadm6.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478886348/Zedd_Spectrum_cover_artwork_vv9sh7.jpg")
Track.create(title: "A Little More", user_id: 3, track_url: "http://res.cloudinary.com/dfufqfnjx/video/upload/v1478887533/Kaskade_John_Dahlba%CC%88ck_Feat._Sansa_-_A_Little_More_Audio_ijzyk6.mp3", cover_url: "http://res.cloudinary.com/dfufqfnjx/image/upload/v1478887326/artworks-000130649167-k067yu-t500x500_zcg6lu.jpg")
