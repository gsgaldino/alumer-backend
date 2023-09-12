import dotenv from 'dotenv'
import path from 'path'
import { Env } from '@/infra/interfaces'

const environment = process.env.NODE_ENV || 'development'
const envPath = path.resolve(__dirname, '..', '..', '..', 'config')

dotenv.config({
  path: `${envPath}/.${environment}.env`
})

export const env: Env = {
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/alumer-db-unstable',
  NODE_ENV: process.env.NODE_ENV || 'development'
}
