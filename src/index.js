//sv configurado
const app = require('./config/server.js'); 

//Llamar funcion para renderizar ruta
require('./app/routes/inventory.js')(app);

//Inicializacion del servidor en el puerto configurado
//Colocamos a "escuchar" el puerto en el que se inicie el servidor,
// es muy importante indicar en que puerto para tener conocimiento
// de donde esta funcionando el mismo:
app.listen(app.get('port'), () => {
    console.log("Servidor en el puerto: ", app.get('port'));
});