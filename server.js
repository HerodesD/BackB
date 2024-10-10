import express from "express";
import "dotenv/config.js";

const server = express();
const PORT = process.env.PORT || 8080;
const ready = () => console.log("server ready in port " + PORT);

server.get('/', (req, res) => {
    res.send('Hola mundo');
}) //endpoint

server.get('/saludo', (req, res) => {
    res.send('sexo salvaje');
}) //endpoint



server.listen(PORT, ready);

// console.log(process.env.PORT); //variables de entorno

