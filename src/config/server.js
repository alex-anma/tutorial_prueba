//Traer modulos para configurar servidor

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express(); //Inicializacion del servidor

//configuracion
//configurar los puertos. Utilizar un puerto del sistema operativo o el puerto 3000
app.set('port', process.env.PORT || 3000);

//Configurar motor de plantillas
app.set('view engine', 'ejs');

//Configurar carpeta de vistas. path.join une los directorios, __dirname= directorio actual
app.set('views', path.join(__dirname, '../app/views'));

//Configurar body-parser (middleware)
//Extended: false: NO VOY A ENVIAR MULTIMEDIA
//Al usar un formulario lo configuramos de la siguiente manera
//ya que solo enviaremos datos, no imagenes ni video.
app.use(bodyParser.urlencoded({extended:false}));

//Se exporta configuraciones de app
module.exports = app;