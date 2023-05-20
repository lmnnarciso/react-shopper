import { useEffect, useState } from 'react'

function getConversionRates() {
  return fetch('https://my-json-server.typicode.com/noqxio/react-shopper/db').then((res) =>
    res.json()
  )
}

export const useGetConversionRates = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    ;(async () => {
      const converionData = await getConversionRates()
      setData(converionData)
    })()
  }, [])

  return [data, setData]
}
