import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({
  strDrinkThumb,
  strDrink,
  strGlass,
  strAlcoholic,
  idDrink
}) => {

  return (
    <div className="cocktail">
      <img src={ strDrinkThumb } alt=""/>
      <footer className="cocktail-footer">
        <h3>{ strDrink }</h3>
        <h4>{ strGlass }</h4>
        <p>{ strAlcoholic }</p>

        <Link 
          to={`/cocktail/${idDrink}`} 
          className="btn btn-primary"
        >
          details
        </Link>
      </footer>
    </div>
  )
}

export default Cocktail
