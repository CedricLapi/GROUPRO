
const IdeaController = require('../controller/idea.controller');
const { authenticate } = require('../config/jwt.config');
 
module.exports = app => {
    app.get('/api/ideas', authenticate, IdeaController.findAllIdeas);
    app.get('/api/ideas/:id/details',  IdeaController.findOneSingleIdea);
    app.patch('/api/ideas/:id/edit',  IdeaController.updateExistingIdea);
    app.post('/api/ideas/new',  IdeaController.createNewIdea);
    app.delete('/api/ideas/:id',  IdeaController.deleteAnExistingIdea);
}