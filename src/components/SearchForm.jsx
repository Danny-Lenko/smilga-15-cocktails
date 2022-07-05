import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { handleUserInput, userInput } = useGlobalContext()

  return (
    <div className="search">
      <div className="search-form">
        <form className="form-control">
          <label>
            Search your favourite cocktail
            <input 
              type="text"
              value={ userInput }
              onChange={ (e) => handleUserInput(e) }
            />
          </label>
        </form>
      </div>
    </div>

  )
}

export default SearchForm
