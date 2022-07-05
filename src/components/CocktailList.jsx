import React from 'react'
import Cocktail from './Cocktail'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { drinks } = useGlobalContext()

  const allDrinks = drinks.map(drink => (
    <Cocktail {...drink} key={drink.idDrink}/>
  ))

  if (drinks.length < 1) {
    return <section className="section">
      <h2 className="section-title">no cocktails matched your search criteria</h2>
    </section>
  }

  return (
    <section className="section">
      <h1 className="section-title">Cocktails</h1>
      <div className="cocktails-center">
        {allDrinks}
      </div>
    </section>
  )
}

export default CocktailList
