import { Router } from "express";
import User from "../../models/User.js";

let allUser = async (req, res) => {
    try {
        let all = await User.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

// las peticiones en bases de datas reciben 

let userByRole = async (req, res) => {
    try {

        let roleQuery = req.params.x
        let all = await User.find({ role: roleQuery })


        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}






export { allUser, userByRole }