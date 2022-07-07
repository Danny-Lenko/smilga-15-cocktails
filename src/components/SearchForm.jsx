import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { handleUserInput, userInput } = useGlobalContext()

  return (
    <section className="section search">
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
    </section>

  )
}

export default SearchForm
