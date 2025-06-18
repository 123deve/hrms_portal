import express from "express";
import {
    createUser,
    getAllUser,
    getUserById,
    update,
    deleteUser
} from "../controller/userController.js"

//create router instance
const route = express.Router();

route.post("/user",createUser);
route.get("/user",getAllUser);
route.get("/user/:id",getUserById);
route.put("/update/user/:id",update);
route.delete("/delete/user/:id",deleteUser);

export default route;