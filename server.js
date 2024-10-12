import express from "express";
import "dotenv/config.js";
import "./config/dataBase.js"
import cors from "cors";
import morgan from "morgan";
import indexRouter from "./router/index.js"

const server = express();

const PORT = process.env.PORT || 8080;

const ready = () => console.log("server ready in port " + PORT);


// middlewares para express: son 4.


server.use(express.json()) // las peticiones van en formato json
server.use(express.urlencoded({ extended: true })) // las peticiones van en formato url, nos sirve para recibir datos de formularios
server.use(cors()) // agrega seguridad
server.use(morgan('dev')) // agrega logs, para trazar las peticiones y respuestas.


//router
server.use('/api', indexRouter)


server.listen(PORT, ready);




// console.log(process.env.PORT); //variables de entorno

//midleware es un fragmento de codigo que controla la peticion y la respuesta
// midderware es una funcion que se ejecuta en cada peticion que se hace al servidor