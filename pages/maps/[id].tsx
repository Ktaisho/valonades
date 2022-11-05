import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Characters, CharacterType } from "@/base/characters"
import { Maps } from "@/base/maps"

const MapDetail: NextPage = () => {
  const router = useRouter()

  const [mapId, setMapId] = useState<string>("")
  const [selectedCharacter, setCharcter] = useState<CharacterType | null>(null)

  const fetchData = () => {
    const { id } = router.query

    const mapid = Maps.find((map) => map.id === id)

    if (mapid) {
      setMapId(mapid.id)
    }
  }

  const selectCharacter = (characterId: string) => {
    const character = Characters.find((c) => c.id === characterId)
    if (character === undefined) {
      console.log("You selected an undefined character.")
    } else {
      setCharcter(character)
    }
  }

  useEffect(() => {
    fetchData()
  }, [router.query])

  return (
    <div className={[`w-[100%]`, `flex`, `flex-col md:flex-row`].join(" ")}>
      {/* <h2 className="text-2xl font-bold">Map ID: {mapId}</h2> */}
      <div className={[`md:order-1`].join(" ")}>
        <p>Abilities </p>
        <div>
          {selectedCharacter ? (
            Object.entries(selectedCharacter.skills).map(([n, ability]) => {
              return <div key={n}>{ability.name}</div>
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div
        className={[
          `min-w-[800px]`,
          `h-[600px]`,
          `md:mr-[2px]`,
          `order-1 md:order-2`,
        ].join(" ")}
      >
        {/*  */}
      </div>

      <div className={[`md:order-3`].join(" ")}>
        <p>Characters</p>
        <div className={[`w-[100%]`, `flex`, `flex-wrap`].join(" ")}>
          {
            // キャラ選択リスト
            Characters.map((character) => {
              return (
                <div
                  key={character.id}
                  className={[
                    `w-[40px]`,
                    `h-[40px]`,
                    `bg-gray-300`,
                    `rounded-[50%]`,
                    `cursor-pointer`,
                  ].join(" ")}
                  onClick={() => selectCharacter(character.id)}
                >
                  {character.name[0]}
                  {/* {character.name} */}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MapDetail
