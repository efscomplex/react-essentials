import React, { useEffect, useState } from 'react'
import Pokemons from './components/Pokemons'

const App = () => {
   const [count, setCount] = useState(0)
   useEffect(() => {
      console.log('hello')
   }, [])
   return (
      <div>
         <h1> hello!! from the first SSR app 🚀 {count}</h1>
         <button
            onClick={() => {
               setCount((s: any) => s + 1)
            }}
         >
            add count
         </button>
         <img src='/travel.jpeg' width='200px' />
         <Pokemons />
      </div>
   )
}

export default App
