import { z } from 'zod'

import { badgeSchema } from './badge'
import { artifactSchema } from './artifact'
import { teamSchema } from './team'

export const userSchema = z.object({
  firstname: z.string().min(4),
  lastname: z.string().min(4),
  nick: z.string().min(2),
  email: z.string().min(6),
  password: z.string().min(4),
  repeatPassword: z.string().min(4),
  avatarUrl: z.optional(z.string()),
  team: z.optional(z.array(teamSchema)),
  since: z.optional(z.number()),
  role: z.optional(z.string()),
  eventsCounter: z.optional(z.object({
    pingucos: z.number(),
    incredible: z.number()
  })),
  alumecas: z.optional(z.object({
    balance: z.number(),
    lastUpdateAt: z.number(),
  })),
  badges: z.optional(z.array(badgeSchema)),
  artifacts: z.optional(z.array(artifactSchema)),
}).refine((data) => data.password === data.repeatPassword, {
  message: 'Passwords do not match',
  path: ['repeatPassword']
})

export type IUser = z.infer<typeof userSchema>
