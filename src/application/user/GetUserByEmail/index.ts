import { UserMemoryRepository } from '@/infra/repository'
import { GetUserByEmailUseCase } from './GetUserByEmailUseCase'
import { GetUserByEmailController } from './GetUserByEmailController'

const userRepository = new UserMemoryRepository()
const getUserByEmailUseCase = new GetUserByEmailUseCase(userRepository)
const getUserByEmailController = new GetUserByEmailController(getUserByEmailUseCase)

export { getUserByEmailController }
