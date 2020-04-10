const mongoose = require('mongoose');

//const schema = mongoose.schema;
const [Schema] = mongoose;

const userSchema = new Schema({

    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    data: {
        type: {
            age: Number,
            isMale: Boolean
        }
    },
    role: {
        type: String,
        enum: ('Admin, seller'),
        default: 'seller'
    }

});

const model = mongoose.model('User', userSchema);

module.exports = model;