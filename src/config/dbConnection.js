//Modulo para conectarnos a base de datos

const mysql = require('mysql');

//Configurar las credenciales de ingreso.  
//Basicamente, se busca retornar una conexion en cualquier lugar.
//Se configura el host como el localhost (o una IP si la base de datos esta en otro lugar)
//Usario root
//Como no se dispone de contraseña pues no se le coloca la opcion
//Se indica el nombre de la base de datos
//En este caso al tener xampp y workbench se debe tener en cuenta el puerto en el que esta trabajando.

module.exports = () =>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'inventario',
        port: '3308'
    })
}