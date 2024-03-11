
const mongoose = require('mongoose');
 
const IdeaSchema = new mongoose.Schema({

    idea: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "description must be at least 5 characters long!"]

    }

    }, { timestamps: true });
 
const Idea = mongoose.model('Idea', IdeaSchema);
 
module.exports = Idea;
