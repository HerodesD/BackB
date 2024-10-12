import mongoose from "mongoose";


let url = process.env.URI_MONGO

console.log(url)


// 1ra Forma de coencetar la base de datos

/*mongoose
    .connect(url)
    .then(() => console.log("conectado a la base de datos"))
    .catch((error) => console.log(error))

*/


// 2da forma de coencetar la base de datos

async function conectandoBaseDeDatos() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("conectado a la base de datos")
    } catch (error) {
        console.log(error);

    }
}

conectandoBaseDeDatos()
