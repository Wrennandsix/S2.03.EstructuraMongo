
db.createCollection('user', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'user',
      required: [
        'user_id',
        'username',
        'password',
        'email',
        'date_of_birth',
        'country',
        'postal_code',
        'channel',
        'subscriptions'
      ],
      properties: {
        user_id: { bsonType: 'objectId' },
        username: { bsonType: 'string' },
        password: { bsonType: 'string' },
        email: { bsonType: 'string' },
        gender: { enum: ['Male', 'Female', 'Other'] },
        date_of_birth: { bsonType: 'date' },
        country: { bsonType: 'string' },
        postal_code: { bsonType: 'string' },
        channel: {
          bsonType: 'object',
          title: 'channel',
          required: ['channel_id', 'name', 'creation_date'],
          properties: {
            channel_id: { bsonType: 'objectId' },
            name: { bsonType: 'string' },
            description: { bsonType: 'string' },
            creation_date: { bsonType: 'date' },
            videos: {
              bsonType: 'array',
              items: {
                bsonType: 'object',
                title: 'video',
                required: [
                  'video_id',
                  'title',
                  'duration',
                  'likes',
                  'dislikes',
                  'file_name',
                  'thumbnail',
                  'views',
                  'status',
                  'publication_date',
                  'comment'
                ],
                properties: {
                  video_id: { bsonType: 'objectId' },
                  title: { bsonType: 'string' },
                  description: { bsonType: 'string' },
                  duration: { bsonType: 'double' },
                  likes: {
                    bsonType: 'object',
                    title: 'likes',
                    required: ['user_id', 'date'],
                    properties: {
                      user_id: { bsonType: 'objectId' },
                      date: { bsonType: 'date' }
                    }
                  },
                  dislikes: {
                    bsonType: 'object',
                    title: 'dislikes',
                    required: ['user_id', 'date'],
                    properties: {
                      user_id: { bsonType: 'objectId' },
                      date: { bsonType: 'date' }
                    }
                  },
                  file_name: { bsonType: 'string' },
                  thumbnail: { bsonType: 'binData' },
                  views: { bsonType: 'int' },
                  status: { enum: ['Public', 'Private'] },
                  publication_date: { bsonType: 'date' },
                  comment: {
                    bsonType: 'array',
                    items: {
                      bsonType: 'object',
                      title: 'comment',
                      required: ['likes'],
                      properties: {
                        comment_id: { bsonType: 'objectId' },
                        likes: {
                          bsonType: 'object',
                          title: 'likes',
                          required: ['comment_id', 'date'],
                          properties: {
                            comment_id: { bsonType: 'objectId' },
                            date: { bsonType: 'date' }
                          }
                        },
                        dislikes: {
                          bsonType: 'object',
                          title: 'dislikes',
                          required: ['comment_id', 'date'],
                          properties: {
                            comment_id: { bsonType: 'string' },
                            date: { bsonType: 'date' }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            tag: { bsonType: 'array', items: { bsonType: 'objectId' } }
          }
        },
        subscriptions: { bsonType: 'array', items: { bsonType: 'objectId' } },
        playlists: {
          bsonType: 'array',
          items: {
            bsonType: 'object',
            title: 'playlist',
            required: ['playlist_id', 'name', 'creation_date', 'status'],
            properties: {
              playlist_id: { bsonType: 'objectId' },
              name: { bsonType: 'string' },
              creation_date: { bsonType: 'date' },
              status: { enum: ['Private', 'Public'] }
            }
          }
        }
      }
    }
  }
});
db.createCollection('tag', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'tag',
      required: ['tag_id', 'name'],
      properties: {
        tag_id: { bsonType: 'objectId' },
        name: { bsonType: 'string' }
      }
    }
  }
});
