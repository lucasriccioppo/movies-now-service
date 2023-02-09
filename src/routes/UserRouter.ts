import { Router } from 'express'
import userController from '../controllers/UserController'

const routes = Router()

routes.post('/', userController.createUser)
routes.get('/', userController.getUsers)

export default routes