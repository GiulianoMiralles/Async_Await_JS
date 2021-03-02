async function requestHandler(req, res) {

    try {
        const user = await User.finfByID(req.userId);  //Esto es asincrono cuando termine de ejecutarse el resultado lo va a asignar a una constante
        const tasks = await Task.finfByID(user.tasksId);
        tasks.completed = true;
        await tasks.save();
        res.send('Task Completed')
    } catch (error) {
        res.send(error);
    }
}