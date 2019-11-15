
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all

user1 = User.create(username: "mtvghosts", email: "mtvg@tumbly.com", password: '123456')
user2 = User.create(username: "PZ", email: "polly@tumbly.com", password: '123456')
user3 = User.create(username: "ArielPink", email: "ariel@tumbly.com", password: '123456')
user4 = User.create(username: "JohnMaus", email: "maus@tumbly.com", password: '123456')
user5 = User.create(username: "JohnLinnell", email: "johnL@tumbly.com", password: '123456')
user6 = User.create(username: "JohnFlansburg", email: "johnF@tumbly.com", password: '123456')
user7 = User.create(username: "Woongi", email: "woongi@tumbly.com", password: '123456')
user8 = User.create(username: "DonnieLove", email: "donnie@tumbly.com", password: '123456')
user9 = User.create(username: "AndyPartridge", email: "xtc@tumbly.com", password: '123456')
user10 = User.create(username: "TumblyAddict7", email: "addict@tumbly.com", password: '123456')
user11 = User.create(username: "YumPop3303", email: "yumpop3303@tumbly.com", password: '123456')

# post1 = Post.create(title: "Are we not men?", body: "We are DEVO", user_id: user2.id, post_type: "photo")
# post2 = Post.create(title: "Hello!", body: "Is there anybody in there?", user_id: user10.id, post_type: "text")
# post3 = Post.create(title: "Two words....", body: "OF. MONTREAL.", user_id: user1.id, post_type: "photo")
# post4 = Post.create(title: "", body: "mtvghosts does it again! Check out 2014's Tripop now on Bandcamp", user_id: user11.id, post_type: "photo")
# post5 = Post.create(title: "My confession:", body: "I LOVE TUMBLY!!", user_id: user10.id, post_type: "text")
# post6 = Post.create(title: "They Might Be Giants", body: "BOYYY. This band is an innovative treasure. I recommend their first 10 albums.", user_id: user10.id, post_type: "photo")
# post7 = Post.create(title: "Ouch", body: "Its the Rutles. Check out that Rutland Sound", user_id: user9.id, post_type: "photo")
# post8 = Post.create(title: "", body: "Sometimes its hard to maintain my Tumbly blog when the world seems like its crashing down... So thank you for your support during these hard times:) Tumblies stick together", user_id: user4.id, post_type: "text")
# post9 = Post.create(title: "Promnyte", body: "Behind the scenes of the music video!!", user_id: user8.id, post_type: "photo")
# post10 = Post.create(title: "Space!", body: "Astral memories of the ghosts", user_id: user7.id, post_type: "photo")
# post11 = Post.create(title: "Important!", body: "I'm looking for a Job! I love developing applications in Rails and React. Redux is the BEST. ", user_id: user8.id, post_type: "text")
# post12 = Post.create(title: "", body: "It me (AP)", user_id: user3.id, post_type: "photo")
# post13 = Post.create(title: "Mind arise", body: "Eyes up to the sunset", user_id: user6.id, post_type: "photo")
# post14 = Post.create(title: "Keep scrollin wise guy", body: "", user_id: user9.id, post_type: "text")
# post15 = Post.create(title: "Martha and Snoop", body: "I wish my life could be this chill... :/", user_id: user5.id, post_type: "photo")
# post16 = Post.create(title: "I/O", body: "Released in 2017", user_id: user4.id, post_type: "photo")
# post17 = Post.create(title: "Attention:", body: "The original Dystopio cover art", user_id: user4.id, post_type: "photo")
# post18 = Post.create(title: "True life:", body: "Tumbly is now my favorite social media. Changed my life. It really reminds me of something....", user_id: user2.id, post_type: "text")
# post19 = Post.create(title: "", body: "Alternate I/O Artwork", user_id: user3.id, post_type: "photo")
# post20 = Post.create(title: "Dystopio", body: "This album slaps!", user_id: user2.id, post_type: "photo")
# post21 = Post.create(title: "Favorite XTC lyrics thread!", body: "I'll start: \'So he speaks of contraception, and emmaculate conception to their daughters.\' ", user_id: user7.id, post_type: "text")
# post22 = Post.create(title: "Call me Dave!", body: "985-8825", user_id: user11.id, post_type: "text")
# post23 = Post.create(title: "The Five 5ides of Time", body: "An album by mtvghosts, released independently in 2016", user_id: user1.id, post_type: "photo")

