import express from "express";
import { addUser, deleteUserById, displayUserById, displayUsers, updateUserById } from "../controller/usersController.js";

const router = express.Router();

router.get('/users',displayUsers)
router.get('/user/:_id',displayUserById)
router.post('/user',addUser)
router.patch('/user/:_id',updateUserById)
router.delete('/user/:_id',deleteUserById)

export default router