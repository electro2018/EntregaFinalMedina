import { useState } from "react"

const ItemCount = ({ stock =5, initial = 1, onAdd}) => {
//const Counter = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial)

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if (counter > initial) {
      setCounter(counter - 1)
    }
  }
 //console.log(counter)
 // const onAdd = ( quantity ) => {
 //   console.log("la cantidad es: ", quantity)
  //}

  return (
    <div>
      <h2>{counter}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => onAdd(counter)}>agregar al carrito</button>
    </div>
  )
}

export default ItemCount

// condicion ? "aca lo true" : null
// condicion && "aca lo true"