

const Idea = require('../models/idea.model');
 
module.exports.findAllIdeas = (req, res) => {
    Idea.find()
        .then((allDaIdeas) => {
            res.json({ ideas: allDaIdeas })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneSingleIdea = (req, res) => {
    Idea.findOne({ _id: req.params.id })
        .then(oneSingleIdea => {
            res.json({ idea: oneSingleIdea })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createNewIdea = (req, res) => {
    Idea.create(req.body)
        .then(newlyCreatedIdea => {
            res.json({ idea: newlyCreatedIdea })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateExistingIdea = (req, res) => {
    Idea.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedIdea => {
            res.json({ user: updatedIdea })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteAnExistingIdea = (req, res) => {
    Idea.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
