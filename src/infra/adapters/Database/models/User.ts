import { Schema, Types, model } from 'mongoose'
import { IUser } from '@/types'

const userSchema = new Schema<IUser>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  nick: { type: String, required: true },
  password: { type: String, required: true },
  since: { type: Date, default: Date.now },
  role: String,
  team: [{ type: Types.ObjectId, ref: 'Team' }],
  eventsCounter: {
    pingucos: Number,
    incredible: Number,
  },
  avatarUrl: String,
  alumecas: {
    balance: Number,
    lastUpdateAt: Date,
  },
  artifacts: [{
    name: String,
    couter: Number
  }],
  badges: [{ type: Types.ObjectId, ref: 'Badge' }]
})

export const UserModel = model<IUser>('User', userSchema)
