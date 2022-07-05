import React, { useState, useContext, useEffect } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [drinksUnfiltered, setDrinksUnfiltered] = useState([])
  const [drinks, setDrinks] = useState([])
  const [loading, setLoading] = useState(false)
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

  function handleUserInput(e) {
    setUserInput(e.target.value)
  }

  useEffect(() => {
    try {
      const re = new RegExp(userInput, 'gi')
      setDrinks(drinksUnfiltered.filter(drink => 
        drink.strDrink.match(re)
      ))
    } catch(err){
      setDrinks([])
    }
  }, [userInput])

  console.log(userInput)
  
  return <AppContext.Provider 
    value={{
      drinks,
      loading, 
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
