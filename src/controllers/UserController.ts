import {Request, Response } from 'express'
import userService from '../services/UserService'

const users = [
    { name: 'Lucas', email: 'lucasriccioppo@hotmail.com' }
]

const createUser = async (req: Request, res: Response) => {
    console.log(req)
    const user = req.body
    const result = await userService.create(user)
    res.json(result)
}

const getUsers = async (req: Request, res: Response) => {
    res.json(users)
}

export default {
    createUser,
    getUsers
}