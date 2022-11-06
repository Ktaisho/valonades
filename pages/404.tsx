import { useRouter } from "next/router"
import { ReactNode } from "react"

export type Page404Props = {
  children?: ReactNode
}

export default function Custom404(props: Page404Props) {
  const router = useRouter()

  const { err_msg } = router.query

  console.log("em: ", err_msg)

  return (
    <div className={[`ml-[30px] mr-[30px]`].join(" ")}>
      <div className={[`mb-[20px]`].join(" ")}>
        <h1 className={[`text-[30px]`, `font-bold`].join(" ")}>
          404 - Page Not Found
        </h1>
        <p>※ 存在しないページです。</p>
      </div>

      {err_msg ? <p>エラーメッセージ: {err_msg}</p> : <p></p>}
    </div>
  )
}
