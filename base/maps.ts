export const MapIds = ["a", "b"] as const

export type MapType = {
  id: typeof MapIds[number]
  name: string
}

export const Maps: MapType[] = [
  {
    id: "a",
    name: "",
  },
]
