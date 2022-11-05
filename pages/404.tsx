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
    <div>
      <h1>404 - Page Not Found</h1>

      {err_msg ? <p>{err_msg}</p> : <p></p>}
    </div>
  )
}
