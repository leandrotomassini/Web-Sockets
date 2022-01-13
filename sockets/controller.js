const socketController = (socket) => {

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


module.exports = {
    socketController
}