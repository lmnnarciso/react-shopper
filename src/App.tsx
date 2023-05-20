import { Bread } from 'components/Bread'
import { GroceriesList } from 'components/GroceriesList'
import { Milk } from 'components/Milk'
import { ShoppingBasket } from 'components/ShoppingBasket'
import React, { FunctionComponent, useState } from 'react'

export interface Groceries {
  name: string
  price: number
}

const App: FunctionComponent = () => {
  const [groceries, setGroceries] = useState<Groceries[]>([])
  const handleGroceries = (value) => {
    setGroceries([...groceries, value])
  }

  return (
    <>
      <div>
        <Bread priceUsd={1.5} handleGroceries={handleGroceries} />
      </div>
      <div>
        <Milk priceUsd={1} handleGroceries={handleGroceries} />
      </div>
      <hr />
      <div>
        <GroceriesList groceries={groceries} />
        <ShoppingBasket prices={groceries.map((item) => item.price)} />
      </div>
    </>
  )
}

export default App
