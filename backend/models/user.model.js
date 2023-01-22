const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const {Schema} = mongoose;
const userModel = Schema(
    {
        username: String,
        email: String,
        password: String
        // profile: {
        //     type: String,
        //     required: true,
        //     default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
        // }
    }, 
    {
        timestamps: true,
    }
)
// userSchema.methods.matchPassword = async function(password) {
//     return await bcrypt.compare(password, this.password);
// }
// userSchema.pre('save', async function(next) {
//     if(this.isModified) {
//         next()
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
// })



const User = mongoose.model('User', userModel);
module.exports = User;






