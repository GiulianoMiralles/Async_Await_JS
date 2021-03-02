function requestHandler(req, res) {                   //CallBack hell o piramide de la muerte, es muy dificil de leer y de mantener
    User.findById(req.userId, function (err, user) { //Yo a cada proceso asincrono le tengo que dar una funcion de callback para que me devuelva algo (error o dato)
        if (err) {                                  //cuando se termine de ejecutar porque si sigo escribiendo codigo abajo solicitando datos de la baso de datos que no llegaron
            res.send(err);                         //Eso es codigo blockeaente y relentiza o mata mi servidor por eso utilizo una funcion callback
        } else {
            Tasks.findById(user.taskId, function (err, task) {
                if (err) {
                    return res.send(err);
                } else {
                    tasks.completed = true;
                    task.save(function (err) {
                        if (err) {
                            return res.send(err);
                        } else {
                            res.send('Task complited');
                        }
                    })
                }
            })
        }
    })
}