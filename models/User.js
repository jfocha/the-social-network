const { Schema, model } = require('mongoose');

// date function for later
//const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'You need to provide a user name!', // required id true, but with a custom message.
        trim: true
    },
    email: {
        type: String,
        required: 'Email address is required',
        unique: true,
        validate: {
            validator: function(v) {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
          },
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
            // getters: true
        },
        id: false
    }
);

// get total count of comments and replies on retrieval
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// create the Pizza model using the UserSchema
const User = model('User', UserSchema);

// export the Pizza model
module.exports = User;