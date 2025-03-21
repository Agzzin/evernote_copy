const mongoose =  require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: {type: String, required: true},
    created_at: { type: Date, default: Date.now },
    uptaded_at: { type: Date, default: Date.now },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

userSchema.pre('save', function(next) {
    if(this.isNew || this.isModified('password')){
        bcrypt.hash(this.password, 10,
            (err, hashedPassword) => {
                if(err){
                    next(err);
                }else{
                    this.password = hashedPassword;
                    next();
                }
            }
        )
    }
})

module.exports = mongoose.model('User', userSchema);   