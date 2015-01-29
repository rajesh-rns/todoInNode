/**
 * Created by rajeshs on 1/28/2015.
 */
module.exports = function(app) {

    require('../routes/todo.route')(app);

    app.use('/api/*', function(req, res) {
        res.json({'error':'This Service is not present'}, 404);
    });

    app.use('*', function(req, res) {
        res.send('<html><h1>404 - Page Cannot be Found</h1><body</html>');
    });
}
