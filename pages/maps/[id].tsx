import classNames from "classnames"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Characters, CharacterType } from "@/base/characters"
import { Maps, MapType } from "@/base/maps"
import MapComponent from "@/components/MapCompoenet"

const MapDetail: NextPage = () => {
  const router = useRouter()

  const [map, setMap] = useState<MapType | null>(null)
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterType>(
    Characters[0],
  )

  /**
   * 初期化処理
   */
  const fetchData = () => {
    const { id } = router.query

    const map = Maps.find((map) => map.id === id)

    if (map) {
      setMap(map)
    }
  }

  /**
   * キャラクターの指定
   * @param characterId
   */
  const selectCharacter = (characterId: string) => {
    const character = Characters.find((c) => c.id === characterId)
    if (character === undefined) {
      console.log("You selected an undefined character.")
    } else {
      setSelectedCharacter(character)
    }
  }

  useEffect(() => {
    fetchData()
  }, [router.query])

  // 以下CSSスタイル用
  const skillCellStyle = [
    `w-[40px]`,
    `h-[40px]`,
    `flex item-center`,
    `justify-center`,
    `cursor-pointer`,
    `rounded-[20%]`,
    `border-[1px]`,
  ]

  return (
    <>
      <h2
        className={classNames(
          [`mb-[10px]`, `mr-[20px]`, `ml-[20px]`],
          [`text-2xl`, `font-bold`, `cursor-default`],
        )}
      >
        マップ名: {map ? map.name : ""}
      </h2>

      <div
        className={[
          `w-[100%]`,
          `flex`,
          `flex-col md:flex-row`,
          `pr-[2px] pl-[2px]`,
        ].join(" ")}
      >
        <div
          className={classNames([
            `order-2`,
            `md:order-1`,
            `ml-[4px]`,
            `mr-[4px]`,
          ])}
        >
          {/* スキル選択欄 */}
          <p>Abilities </p>

          <div className={classNames([`flex`, `flex-col`])}>
            {selectedCharacter
              ? Object.entries(selectedCharacter.skills).map(([n, ability]) => {
                  return (
                    <div key={n} className={classNames(...skillCellStyle)}>
                      <p className={classNames([`m-[auto]`])}>{ability.name}</p>
                    </div>
                  )
                })
              : [1, 2, 3].map((n) => {
                  return (
                    <div key={n} className={classNames(...skillCellStyle)}>
                      <p className={classNames([`m-[auto]`])}>{n}</p>
                    </div>
                  )
                })}
          </div>
        </div>

        <div
          className={classNames([
            `min-w-[800px]`,
            `h-[600px]`,
            `md:mr-[2px]`,
            `order-1 md:order-2`,
            "bg-gray-300",
          ])}
        >
          {/* ここにマップコンポーネント */}
          <p>map</p>
        </div>

        <div
          className={classNames([`order-3`, `md:order-3`, `md:max-w-[280px]`])}
        >
          {/* キャラ選択欄 */}
          <p>Characters</p>
          <div className={classNames([`w-[100%]`, `flex`, `flex-wrap`])}>
            {Characters.map((character) => {
              return (
                <div
                  key={character.id}
                  className={classNames(
                    [`w-[42px]`, `h-[42px]`],
                    [
                      `bg-gray-300`,
                      `rounded-[50%]`,
                      `cursor-pointer`,
                      `flex`,
                      `items-center`,
                      `justify-center`,
                      `m-[2px]`,
                    ],
                  )}
                  onClick={() => selectCharacter(character.id)}
                >
                  {character.url !== "" ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={character.url}
                      alt={character.id + `_icon`}
                      className={classNames(["rounded-[50%]"])}
                    />
                  ) : (
                    <p
                      className={classNames([`text-black`, `dark:text-black`])}
                    >
                      {character.name[0]}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default MapDetail
