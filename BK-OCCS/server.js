import express from 'express';
import db from './app/models/bdoccs.js';
import cors from 'cors';

//Importamos las rutas de cada entidad
import apartamentosRouter from './app/routes/apartamentos.routes.js';
import contactosRouter from './app/routes/contactos.routes.js';
import rolsRouter from './app/routes/rols.routes.js';
import usuariosRouter from './app/routes/usuarios.routes.js'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
};

//Sincronizar la base de datos
db.config.sync()
    .then(()=>{
        console.log('Base de datos sincronizada');
    })
    .catch((error)=>{
        console.log(error);
    });

//Forzar la creacion de la base de datos
const forceSync = async () => {
    try {
        await db.config.sync({ force: true });
        console.log('Base de datos creada');
    }
    catch (error) {
        console.log(error);
    }
    finally {
        await db.config.close();
    }
}

//forceSync();

app.use(cors(corsOptions));
app.use('/apartamentos', apartamentosRouter);
app.use('/contactos', contactosRouter);
app.use('/roles', rolsRouter);
app.use('/usuarios',usuariosRouter )

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});