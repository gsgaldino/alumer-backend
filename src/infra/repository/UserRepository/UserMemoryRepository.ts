import { User } from '@/domain/entities'
import { UserRepository } from '@/domain/repository'

export class UserMemoryRepository implements UserRepository {
  private users: User[]

  constructor() {
    this.users = [new User('John Doe', 'johndoe@domain.com')]
  }

  async findAll(): Promise<User[]> {
    return this.users
  }

  async findOneByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email)
    return user || null
  }

  async save(user: User): Promise<boolean> {
    try {
      this.users.push(user)
      return true
    } catch (error) {
      return false
    }
  }
}
