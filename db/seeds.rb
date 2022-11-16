User.destroy_all
Music.destroy_all
Rating.destroy_all
Message.destroy_all

puts "🌱 Seeding users..."
u1 = User.create(first_name: "Leona", last_name: "Juan", username: "leona", password: "leona1", bio: "as boring in person ♡ nyc", image: "https://flic.kr/p/2nXg7VK")
u2 = User.create(first_name: "Kaylin", last_name: "Virone", username: "kayvirone", password: "kaylin1", bio: "www.kaylinvirone.com", image: "https://flic.kr/p/2nXaHr9")
u3 = User.create(first_name: "Emily", last_name: "Mendieta", username: "mendieta_em", password: "emily1", bio: "<3", image: "https://flic.kr/p/2nXaHqT")
u4 = User.create(first_name: "Evelyn", last_name: "Gervacio", username: "evelynngx", password: "evelyn1", bio: "🦋🧿🩺", image: "https://flic.kr/p/2nXdhFR")
u5 = User.create(first_name: "Rafia", last_name: "Khandaker", username: "rafiajk", password: "rafia1", bio: "automatic, supersonic, hypnotic, funky fresh", image: "https://flic.kr/p/2nXdhFR")
u6 = User.create(first_name: "Bella", last_name: "Machado", username: "icantisa", password: "bella1", bio: "come back here when you want reassurance that a 25yo doesn't need to be successful", image: "https://flic.kr/p/2nXdhFR")
u7 = User.create(first_name: "Cho", last_name: "Han", username: "chohye_han", password: "cho1", bio: "cho like chocolate!", image: "https://flic.kr/p/2nXdhFR")

puts "🌱 Seeding music..."
m1 = Music.create(song_title: "Self Control", artist: "Frank Ocean", album: "Blonde", album_cover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg")
m2 = Music.create(song_title: "Out of Time", artist: "The Weeknd", album: "Dawn FM", album_cover: "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d")
m3 = Music.create(song_title: "Cinema", artist: "Harry Styles", album: "Harry's House", album_cover: "https://media.pitchfork.com/photos/623b686c6597466fa9d6e32d/1:1/w_600/Harry-Styles-Harrys-House.jpeg")
m4 = Music.create(song_title: "Otro Atardecer", artist: "Bad Bunny", album: "Un Verano Sin Ti", album_cover: "https://upload.wikimedia.org/wikipedia/en/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png")
m5 = Music.create(song_title: "The Less I Know the Better", artist: "Tame Impala", album: "Currents", album_cover: "https://media.pitchfork.com/photos/5929ae46c0084474cd0c188c/1:1/w_600/04192b63.jpg")
m6 = Music.create(song_title: "LOVE.", artist: "Kendrick Lamar", album: "DAMN.", album_cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png")
m7 = Music.create(song_title: "Softly", artist: "Clairo", album: "Immunity", album_cover: "https://images.genius.com/08dcb11c5d99d150b17b92a5e0f1f8b4.1000x1000x1.png")
m8 = Music.create(song_title: "Congratulations", artist: "Mac Miller", album: "The Divine Feminine", album_cover: "https://i.iheart.com/v3/re/new_assets/57f5174d654b9edfd3e746eb")
m9 = Music.create(song_title: "1AM FREESTYLE", artist: "Joji", album: "SMITHEREENS", album_cover: "https://i.scdn.co/image/ab67616d0000b273eaac2a7955f5b8967991cacb")
m10 = Music.create(song_title: "Static", artist: "Steve Lacy", album: "Gemini Rights", album_cover: "https://media.pitchfork.com/photos/62cefb5aee22ee704240b00e/1:1/w_600/Steve-Lacy-Gemini-Rights.jpg")
m11 = Music.create(song_title: "I THINK", artist: "Tyler, the Creator", album: "IGOR", album_cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg")
m12 = Music.create(song_title: "Broken Clocks", artist: "SZA", album: "Ctrl", album_cover: "https://upload.wikimedia.org/wikipedia/en/b/bf/SZA_-_Ctrl_cover.png")

puts "🌱 Seeding ratings..."
r1 = Rating.create(user_id: u1.id, music_id: m1.id, rating: 5, comment: "the best song to ever exist 💗")
r2 = Rating.create(user_id: u2.id, music_id: m2.id, rating: 4, comment: "Such a good song! One of the best ones on the album.")
r3 = Rating.create(user_id: u3.id, music_id: m3.id, rating: 5, comment: "Would die to see this live! 😭")
r4 = Rating.create(user_id: u4.id, music_id: m4.id, rating: 5, comment: "i'll be playing this song at my wedding.")
r5 = Rating.create(user_id: u5.id, music_id: m5.id, rating: 3, comment: "cool song, but overplayed")
r6 = Rating.create(user_id: u6.id, music_id: m6.id, rating: 4, comment: "One of my favorites! 🤩")
r7 = Rating.create(user_id: u7.id, music_id: m7.id, rating: 3, comment: "Overall a good song, but there are better ones on the album.")
r8 = Rating.create(user_id: u1.id, music_id: m8.id, rating: 5, comment: "i love this song so much")
r9 = Rating.create(user_id: u2.id, music_id: m9.id, rating: 2, comment: "Just an okay song, imo")
r10 = Rating.create(user_id: u3.id, music_id: m10.id, rating: 3, comment: "a little bit overhyped")
r11 = Rating.create(user_id: u4.id, music_id: m11.id, rating: 4, comment: "has a fun beat!")
r12 = Rating.create(user_id: u5.id, music_id: m12.id, rating: 5, comment: "perfection ✨")


puts "🌱 Seeding messages..."
m1 = Message.create(user_id: u1.id, message: "follow me on instagram: @_leonaj 🍒")
m2 = Message.create(user_id: u2.id, message: "Always looking for more friends on spotify - hit me up!")
m3 = Message.create(user_id: u3.id, message: "If you love Bad Bunny, we would be besties 🐰")
m4 = Message.create(user_id: u4.id, message: "please don't send me any DMs.")
m5 = Message.create(user_id: u5.id, message: "in search of an adult bevvy buddy!")
m6 = Message.create(user_id: u6.id, message: "Taylor Swift or die 🧣")
m7 = Message.create(user_id: u7.id, message: "Send me your favorite songs!")


puts "✅ Done seeding!"