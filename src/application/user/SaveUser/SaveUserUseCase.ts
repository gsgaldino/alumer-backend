import { User } from '@/domain/entities'
import { UserRepository } from '@/domain/repository'
import { HashProvider } from '@/infra/interfaces'
import { IUser } from '@/types'

export class SaveUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashProvider: HashProvider
  ) {}

  async execute(userData: IUser) {
    const password = await this.hashProvider.hash(userData.password)
    const user = new User({
      ...userData,
      password
    })
    const success = await this.userRepository.save(user)
    return { success }
  }
}
