const mongoose =  require('mongoose');
const Schema = new mongoose.Schema({
    title: String,
    body: String,
    created_at: { type: Date, default: Date.now },
    uptaded_at: { type: Date, default: Date.now },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Note', noteSchema);