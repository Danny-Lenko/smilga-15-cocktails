import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { currentDrinkId } = useGlobalContext()
  const [drink, setDrink] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url + currentDrinkId)
      .then(res => res.json())
      .then(data => {
        setDrink(data.drinks[0])
        setLoading(false)
      })
      .catch(err => alert(`RELOAD PAGE, ${err}`))
  }, [])

  if (loading) {
    return <Loading />
  }

  function getIngredients() {
    return Object.entries(drink)
    .filter(item => item[0].match(/ingredient/i) && item[1])
    .map(item => item[1])
    .join(', ')
  }
  
  return (
    <section className="cocktail-section section">
      <Link to='/'>
        <button className="btn-primary">back home</button>
      </Link>
      <h1>{drink.strDrink}</h1>

      <div className="drink">
        <img src={drink.strDrinkThumb} alt=""/>

        <div>
          <p className="drink-info">
            <span className="drink-data">Name:</span>
            { drink.strDrink }
          </p>

          <p className="drink-info">
            <span className="drink-data">Category:</span>
            { drink.strCategory }
          </p>

          <p className="drink-info">
            <span className="drink-data">Info:</span>
            { drink.strAlcoholic }
          </p>

          <p className="drink-info">
            <span className="drink-data">Glass:</span>
            { drink.strGlass }
          </p>

          <p className="drink-info">
            <span className="drink-data">Instructions:</span>
            { drink.strInstructions }
          </p>

          <p className="drink-info">
            <span className="drink-data">Ingredients:</span>
            { getIngredients() }
          </p>
        </div>

      </div>
    </section>
  )
}

export default SingleCocktail
