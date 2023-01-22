import React from "react"


const Form = () => {
 // const [userData, setUserData] = useState({ name: "", phone: "", email: "" })
//  const total = getTotalPrice()
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target)  
   
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese su nombre"/>
        <input type="text" placeholder="Ingrese su telefono"/>>
        <button type="submit">Finalizar compra</button>
      </form>
    </div>
  )
}

export default Form

