import { Router } from "express"
import { allUser, userByRole } from "../controllers/users/read.js"

const router = Router()

// todas las preguntas a la base de datos son asincronas. todas las funciones de moongose son asincronas


// Este es un endpoint


router.get('/all', allUser)
router.get('/role/:x', userByRole)






export default router