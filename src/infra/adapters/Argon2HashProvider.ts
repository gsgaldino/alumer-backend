import argon2 from 'argon2'
import { HashProvider } from '@/infra/interfaces'

export class Argon2HashProvider implements HashProvider {
  hash(value: string): Promise<string> {
    return argon2.hash(value)
  }

  verify(hashed: string, value: string): Promise<boolean> {
    return argon2.verify(hashed, value)
  }
}
