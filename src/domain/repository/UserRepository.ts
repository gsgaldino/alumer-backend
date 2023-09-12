import { User } from '@/domain/entities'

export interface UserRepository {
  findOneByEmail(email: string): Promise<User | null>
  findAll(): Promise<User[]>
  save(user: User): Promise<boolean>
}
