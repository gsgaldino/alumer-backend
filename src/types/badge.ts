import { z } from 'zod'

export const badgeSchema = z.object({
  description: z.string(),
  backgroundColor: z.string()
})

export type IBadge = z.infer<typeof badgeSchema>
