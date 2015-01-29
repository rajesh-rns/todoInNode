/**
 * Created by rajeshs on 1/28/2015.
 */

var todo = require('../controllers/todo.controller');

module.exports = function(app) {
    app.route('/api/todo')
        .get(todo.list)
        .post(todo.create);

    app.route('/api/todo/:todoId')
        .get(todo.read)
        .put(todo.update)
        .delete(todo.delete);

    app.param('todoId', todo.todoById);

}
