import React from 'react'
import { Map } from '@efsdev/react-toolkit'

const items = [
   {
      id: 1,
      name: 'edi'
   }
]
const render = (item: any) => <h1 key={item.id}>{item.name}</h1>
export default function Pokemons() {
   return (
      <div>
         <Map from={items} render={render} />
      </div>
   )
}
