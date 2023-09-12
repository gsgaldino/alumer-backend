import { UserMemoryRepository } from '@/infra/repository'
import { GetAllUsersController } from './GetAllUsersController'
import { GetAllUsersUseCase } from './GetAllUsersUseCase'

const userRepository = new UserMemoryRepository()
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository)
const getAllUsersController = new GetAllUsersController(getAllUsersUseCase)

export { getAllUsersController }
