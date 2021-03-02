function requesHandler(req, res) {              //Aca hago todas las promesas (then) y en un solo catch meto todos los errores
    User.findById(req.userId)
        .then(function (user) {
            return Tasks.findById(user.taskId)
        })
        .then(function (task) {
            tasks.completed = true;
            return tasks.save();
        })
        .then(function () {
            res.send('Tasks completed')
        })
        .catch(function (errors) {
            res.send(errors);
        })
}