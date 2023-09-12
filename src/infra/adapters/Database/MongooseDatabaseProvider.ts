import mongoose, { ConnectOptions } from 'mongoose'
import { Database, Env } from '@/infra/interfaces'

export class MongooseDatabaseAdapter implements Database {
  constructor(private readonly env: Env) {}

  async init(): Promise<void> {
    try {
      await mongoose.connect(this.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
    } catch (error) {
      console.error(error)
    }
  }
}
