import React from 'react'

export interface MilkProps {
  priceUsd: number
  handleGroceries: (value) => void
}

export function Milk({ priceUsd, handleGroceries }: MilkProps) {
  return (
    <>
      <h1>Milk</h1>
      <p>{priceUsd}</p>
      <button onClick={() => handleGroceries({ name: 'Milk', price: 1 })}>Add to basket</button>
    </>
  )
}
