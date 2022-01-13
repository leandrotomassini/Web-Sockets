const socketController = (socket) => {

<<<<<<< HEAD

    console.log(`Cliente conectado ${socket.id}`);


    socket.on('disconnect', () => {
        console.log(`Cliente desconectado ${socket.id}`);

    });


    socket.on('enviar-mensaje', (payload, callback) => {

        const id = 1232323456;
        callback(id);

        socket.broadcast.emit('enviar-mensaje', payload);

    });

}
=======
    console.log(`Cliente conectado ID: ${ socket.id }`);


    socket.on('disconnect', () => {

        console.log(`Cliente desconectado ID: ${ socket.id }`);

    });

    socket.on('enviar-mensaje', (payload, callback) => {

        const id = 123456;
        callback(id);

        socket.broadcast.emit('enviar-mensaje', payload);
    });

};
>>>>>>> nuevoComienzo


module.exports = {
    socketController
}