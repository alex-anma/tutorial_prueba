//Rutas para el sistema de inventarios
const dbConnection = require('../../config/dbConnection');
const app = require('../../config/server');

//Exportamos una función, al ser flecha "app" sera sera el parametro
module.exports = app => {
    const connection = dbConnection();
    app.get('/', (req, res) =>{
        // res.send("Hola Mundo"); //Primer Ejemplo
        // res.render('../views/inventory.ejs')
        connection.query('SELECT * FROM element', (err, result) => {
            console.log(result);
            if (err) {
                res.send("Someting went wrong :( " + err);
            } else {
                res.render('../views/inventory.ejs', {
                    inventario: result //Crear una variable llamada inventario que recibe el valor de query
                });//Se renderiza tras realizar el query
            }
        });
        app.post('/inventory', (req,res) =>{
            //Haciendo uso de body-parser podemos recibir los datos de HTML por su nombre.
            // console.log(req.body);
            const {item, elemento} = req.body;
            //Insertamos este objeto en la base de datos.
            connection.query("INSERT INTO element SET?",
            {title: item,
            elemento: elemento
            }, (err, result) => {
                res.redirect('/')
            });
        });
    });
};