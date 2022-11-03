export const CharacterIds = ["a", "b"] as const

export type CharacterType = {
  id: typeof CharacterIds[number]
  name: string
}

export const Characters: CharacterType[] = []
