import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [drinksUnfiltered, setDrinksUnfiltered] = useState([])
  const [drinks, setDrinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentDrinkId, setCurrentDrinkId] = useState('')
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDrinksUnfiltered(data.drinks)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    setDrinks(drinksUnfiltered)
  }, [drinksUnfiltered])

  console.log(drinks)

  function getDrinkId(id) {
    setCurrentDrinkId(id)
  }

  function handleUserInput(e) {
    setUserInput(e.target.value)
  }

  useEffect(() => {
    const re = new RegExp(userInput, 'gi')
    setDrinks(drinksUnfiltered.filter(drink => 
        drink.strDrink.match(re)
    ))
  }, [userInput])

  console.log(userInput)
  
  return <AppContext.Provider 
    value={{
      drinks,
      loading, 
      getDrinkId,
      currentDrinkId,
      userInput,
      handleUserInput
    }}
  >
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
