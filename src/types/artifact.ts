import { z } from 'zod'

export const artifactSchema = z.object({
  imgUrl: z.string().url(),
  title: z.string(),
  descriprion: z.string()
})

export type IArtifact = z.infer<typeof artifactSchema>
