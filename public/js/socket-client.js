<<<<<<< HEAD
// Referencias del html
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();


socket.on('connect', () => {

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});

socket.on('disconnect', () => {

    lblOffline.style.display = '';
    lblOnline.style.display = 'none';

});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
});


btnEnviar.addEventListener('click', () => {
=======
// Referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')

const socket = io();

socket.on('connect', () => {
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

socket.on('enviar-mensaje', (payload) => {
    console.log({ payload });
});

btnEnviar.addEventListener('click', () => {;
>>>>>>> nuevoComienzo

    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
<<<<<<< HEAD
        id: '23132132131',
=======
        id: '123',
>>>>>>> nuevoComienzo
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload, (id) => {
<<<<<<< HEAD
        console.log(`Desde el server`, id);
=======
        console.log(id);
>>>>>>> nuevoComienzo
    });

});