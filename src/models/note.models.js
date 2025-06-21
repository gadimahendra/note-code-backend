

const mongoose = require("mongoose");


const noteSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    language: {
        type: String
    },
    code: {
        type: String
    },
    theme: {
        type: String
    },

})

noteSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret.id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.model('Note', noteSchema)