//import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
 
  const { cart } = useContext(CartContext) 
  
 //console.log(cart)
 
  return (
    <div> 
      {
      cart.map(item =>(
        <div key={item.id}> 
      <h2>{item.name}</h2>
      <h2>{item.price}</h2>
      <h2>{item.quantity}</h2>
        </div>  
      )) 
      }
        </div>
   )
  }

export default Cart
