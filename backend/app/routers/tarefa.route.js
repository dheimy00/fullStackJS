module.exports = function(app) {
 
const tarefas = require('../controllers/tarefa.controller.js');

 app.post('/api/tarefas', tarefas.create);
 
 app.get('/api/tarefas', tarefas.findAll);

 app.get('/api/tarefas/:id', tarefas.findById);

 app.put('/api/tarefas', tarefas.update);

 app.delete('/api/tarefas/:id', tarefas.delete);

}