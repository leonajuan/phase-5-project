User.destroy_all
Music.destroy_all
Rating.destroy_all
Message.destroy_all

puts "🌱 Seeding users..."
u1 = User.create(first_name: "Leona", last_name: "Juan", username: "leona", password: "password123", bio: "", image: "")
u2 = User.create(first_name: "Leona", last_name: "Juan", username: "leona", password: "password123", bio: "", image: "")
u3 = User.create(first_name: "Leona", last_name: "Juan", username: "leona", password: "password123", bio: "", image: "")
u4 = User.create(first_name: "Leona", last_name: "Juan", username: "leona", password: "password123", bio: "", image: "")
u5 = User.create(first_name: "Leona", last_name: "Juan", username: "leona", password: "password123", bio: "", image: "")

puts "🌱 Seeding music..."
l1 = Music.create(song_title: "Self Control", artist: "Frank Ocean", album: "Blonde", album_cover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg")
l2 = Music.create(song_title: "Out of Time", artist: "The Weeknd", album: "Dawn FM", album_cover: "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d")
l3 = Music.create(song_title: "Cinema", artist: "Harry Styles", album: "Harry's House", album_cover: "https://media.pitchfork.com/photos/623b686c6597466fa9d6e32d/1:1/w_600/Harry-Styles-Harrys-House.jpeg")
l4 = Music.create(song_title: "Venice Bitch", artist: "Lana Del Rey", album: "Norman F***ng Rockwell", album_cover: "https://www.interviewmagazine.com/wp-content/uploads/2019/07/nfr.png")
l5 = Music.create(song_title: "Otro Atardecer", artist: "Bad Bunny", album: "Un Verano Sin Ti", album_cover: "https://upload.wikimedia.org/wikipedia/en/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png")

puts "🌱 Seeding ratings..."
c1 = Rating.create(user_id: u1.id, music_id: l1.id, rating: 5, comment:"the best song to ever exist 💗")
c2 = Rating.create(user_id: u2.id, music_id: l2.id, rating: 4, comment:"Such a good song! One of the best ones on the album.")
c3 = Rating.create(user_id: u3.id, music_id: l3.id, rating: 5, comment:"Would die to see this live! 😭")
c4 = Rating.create(user_id: u4.id, music_id: l5.id, rating: 5, comment:"i'll be playing this song at my wedding.")
c5 = Rating.create(user_id: u5.id, music_id: l4.id, rating: 3, comment: "this song is so relaxing, but makes me sad")

puts "🌱 Seeding messages..."
c1 = Message.create(user_id: u1.id, message: "did you listen to that song i sent you?")
c2 = Message.create(user_id: u2.id, message: "I need new music to listen to.")
c3 = Message.create(user_id: u3.id, message: "Can you send me that playlist you made?")
c4 = Message.create(user_id: u4.id, message: "lol i hate country music")
c5 = Message.create(user_id: u5.id, message: "We need pregame music!!")

puts "✅ Done seeding!"