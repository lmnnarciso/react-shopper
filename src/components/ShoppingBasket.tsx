import React from 'react'

export interface ShoppingBasketProps {
  prices: number[]
}

export function ShoppingBasket({ prices }: ShoppingBasketProps) {
  const sumOfBasket = prices.reduce((acc, cur) => cur + acc, 0)
  return (
    <>
      <h1>ShoppingBasket</h1>
      <p>Amount (USD): {sumOfBasket}</p>
    </>
  )
}
