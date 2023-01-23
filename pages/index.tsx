import classNames from "classnames"
import type { NextPage } from "next"
import Link from "next/link"
import styles from "../styles/Home.module.scss"
import { Maps } from "@/base/maps"

const Home: NextPage = () => {
  return (
    <div className={`${styles.container}`}>
      <h2 className="text-2xl font-bold">これが見れたら成功</h2>

      {/* ********* 画面遷移テスト用 ********* */}
      <ul>
        {Maps.map((map) => {
          return (
            <li key={map.id} className={classNames([`hover:cursor-pointer`])}>
              <Link href={`/maps/${map.id}`}>{map.name}</Link>
            </li>
          )
        })}
      </ul>
      {/* ********* 画面遷移テスト用 ********* */}
    </div>
  )
}

export default Home
