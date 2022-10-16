import type { NextPage } from "next"
import styles from "../styles/Home.module.scss"

const Home: NextPage = () => {
  return (
    <div className={`${styles.container}`}>
      <h2 className="text-2xl font-bold">これが見れたら成功</h2>
    </div>
  )
}

export default Home
