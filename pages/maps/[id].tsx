import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { MapIds } from "@/base/maps"

const MapDetail: NextPage = () => {
  const router = useRouter()

  const [mapId, setMapId] = useState<typeof MapIds[number] | null>(null)

  const fetchData = () => {
    const { id } = router.query

    if (typeof id == "string" && MapIds.includes(id)) {
      setMapId(id)
    }
  }

  useEffect(() => {
    fetchData()
  }, [router.query])

  return (
    <div className={``}>
      <h2 className="text-2xl font-bold">Map ID: {mapId}</h2>
    </div>
  )
}

export default MapDetail
