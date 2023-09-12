import { UserRepository } from '@/domain/repository'

export class GetUserByEmailUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(email: string) {
    const user = await this.userRepository.findOneByEmail(email)
    return user?.toObject()
  }
}
