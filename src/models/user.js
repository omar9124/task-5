const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 18,
        validate(val) {
            if (val <= 0) {
                throw new Error('age must be a positive number')
            }
        }
    },
    city: {
        type: String,
        trim: true
    }
})



const User = mongoose.model('User', userSchema)

module.exports = User 
