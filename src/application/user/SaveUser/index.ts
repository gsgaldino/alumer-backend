import { UserMongoRepository } from '@/infra/repository'
import { Argon2HashProvider } from '@/infra/adapters'

import { SaveUserController } from './SaveUserController'
import { SaveUserUseCase } from './SaveUserUseCase'

const userRepository = new UserMongoRepository()
const hashProvider = new Argon2HashProvider()
const saveUserUseCase = new SaveUserUseCase(userRepository, hashProvider)
const saveUserController = new SaveUserController(saveUserUseCase)

export { saveUserController }
