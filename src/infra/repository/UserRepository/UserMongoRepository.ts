import { User } from '@/domain/entities'
import { UserRepository } from '@/domain/repository'
import { UserModel } from '@/infra/adapters/Database/models'

export class UserMongoRepository implements UserRepository {
  async findOneByEmail(email: string): Promise<User | null> {
    const userData = await UserModel.findOne({ email })
    if (userData) return new User(userData)
    return null
  }

  async findAll(): Promise<User[]> {
    const userData = await UserModel.find()
    const users = userData.map((userData) => new User(userData))
    return users
  }

  async save(user: User): Promise<boolean> {
    const saved = await UserModel.create(user)
    if (saved) return true
    return false
  }
}
