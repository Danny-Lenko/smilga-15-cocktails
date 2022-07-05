import React from 'react'
import { Link } from 'react-router-dom'

import { useGlobalContext } from '../context'

const Cocktail = ({
  strDrinkThumb,
  strDrink,
  strGlass,
  strAlcoholic,
  idDrink
}) => {

  const { getDrinkId } = useGlobalContext()

  return (
    <div className="cocktail">
      <img src={ strDrinkThumb } alt=""/>
      <footer className="cocktail-footer">
        <h3>{ strDrink }</h3>
        <h4>{ strGlass }</h4>
        <p>{ strAlcoholic }</p>
        <Link to="/cocktail">
          <button 
            className="btn-primary"
            onClick={ () => getDrinkId(idDrink) }
          >
            details
          </button>
        </Link>
      </footer>
    </div>
  )
}

export default Cocktail
