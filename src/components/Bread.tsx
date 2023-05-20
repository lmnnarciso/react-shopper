import React from 'react'

export interface BreadProps {
  priceUsd: number
  handleGroceries: (value) => void
}

export function Bread({ priceUsd, handleGroceries }: BreadProps) {
  return (
    <>
      <h1>Bread</h1>
      <p>{priceUsd}</p>

      <button onClick={() => handleGroceries({ name: 'Bread', price: 1.5 })}>Add to basket</button>
    </>
  )
}
