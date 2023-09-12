import { z } from 'zod'

export const teamSchema = z.object({
  title: z.string(),
  description: z.string()
})

export type ITeam = z.infer<typeof teamSchema>
