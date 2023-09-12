import { UserRepository } from '@/domain/repository'

export class GetAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {
    const users = await this.userRepository.findAll()
    const usersData = users.map((user) => user.toObject())
    return usersData
  }
}
