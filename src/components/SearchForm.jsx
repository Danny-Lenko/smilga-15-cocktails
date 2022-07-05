import React, { useState } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { handleUserInput, userInput } = useGlobalContext()
  // const [userInput, setUserInput] = useState('')

  // function handleUserInput(e) {
  //   setUserInput(e.target.value)
  // }

  return (
    <div className="search">
      <div className="search-form">
        <form className="form-control">
          <label>
            Search your favourite cocktail
            <input 
              type="text"
              value={ userInput }
              onChange={ (e) => {
                handleUserInput(e)
                // setUserInput(userInput)
              } }
            />
          </label>
        </form>
      </div>
    </div>

  )
}

export default SearchForm
