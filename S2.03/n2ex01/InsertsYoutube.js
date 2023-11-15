

db.user.insertOne({
  user_id: ObjectId(), 
  username: 'GoblinSayer',
  password: 'password123',
  email: 'goblinslayer@gmail.com',
  gender: 'Male',
  date_of_birth: ISODate('1990-01-01'),
  country: 'Spain',
  postal_code: '08226',
  channel: {
    channel_id: ObjectId(),
    name: 'SlayerFame',
    description: 'This is my channel.',
    creation_date: ISODate(),
    videos: [],
    tag: []
  },
  subscriptions: [],
  playlists: []
});

db.user.insertMany([
  {
    user_id: ObjectId(),
    username: 'magicplayer',
    password: 'password456',
    email: 'magicplayer@gmail.com',
    gender: 'Female',
    date_of_birth: ISODate('1985-05-15'),
    country: 'Spain',
    postal_code: '08225',
    channel: {
      channel_id: ObjectId(),
      name: 'magicgames',
      description: 'Welcome to my channel!',
      creation_date: ISODate(),
      videos: [],
      tag: []
    },
    subscriptions: [],
    playlists: []
  },

]);

db.tag.insertMany([
  {
    tag_id: ObjectId(),
    name: 'Science'
  },
  {
    tag_id: ObjectId(),
    name: 'Travel'
  },
  {
    tag_id: ObjectId(),
    name: 'Maths'
  },
]);

