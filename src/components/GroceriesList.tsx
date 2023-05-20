import React from 'react'
import { Groceries } from 'src/App'
import { useGetConversionRates } from 'src/hooks/useGetConversionRates'

export function GroceriesList({ groceries }: { groceries: Groceries[] }) {
  const [data] = useGetConversionRates()
  return (
    <ul>
      {groceries.map((item, idx) => (
        <li key={idx}>
          {item.name} - USD ${item.price} | EUR {item.price * data?.USD.rates.EUR} | GBP{' '}
          {(item.price * data?.USD.rates.GBP).toFixed(2)}
        </li>
      ))}
    </ul>
  )
}
