module.exports = function(app) {
  var express = require('express');
  var todosRouter = express.Router();

  todosRouter.get('/', function(req, res) {
    res.send({
      'todos': [
        {
          id: 1,
          title: 'Learn Ember.js',
          isCompleted: true 
        },
        {
          id: 2,
            title: '...',
            isCompleted: false
        },
        {
          id: 3,
            title: 'lucro!',
            isCompleted: false  
        }
      ]
    });
  });

  todosRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  todosRouter.get('/:id', function(req, res) {
    res.send({
      'todos': {
        id: req.params.id
      }
    });
  });

  todosRouter.put('/:id', function(req, res) {
    res.send({
      'todos': {
        id: req.params.id
      }
    });
  });

  todosRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/todos', todosRouter);
};
