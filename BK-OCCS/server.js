import express from 'express';
import db from './app/models/bdoccs.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
    origin: 'http://localhost:8081',
    optionsSuccessStatus: 200,
};

//app.use('/apartamentos', apartamentosRouter);

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

forceSync();

app.use(cors(corsOptions));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});