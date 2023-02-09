import { User } from '../models/userModel'
import database from '../database'

const datasource = database.getDataSource()
const userRepository = datasource.getRepository(User)

interface UserType {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const create = async (user: UserType) => {
    console.log(user)
    const createdUser = await userRepository.insert(user)
    return createdUser
}

export default {
    create
}