import { useState } from 'react'
import Mensajes from './mensajes';
import './App.css'

function App() {
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e)
  }
  const obj=[
    {
      id:"da@e.com",
      nombre: "el mio",
      apellido: "triebl",
      edad: 32,
      texto: "el texto"
    }
  ]  
  return (
    <div className="App">
      <h1>Centro de mensajes</h1>
      <form onSubmit={handleSubmit} className="formClass">
        <input type="email" placeholder='email' name="id" />
        <input type="text" placeholder='nombre'  name="nombre" />
        <input type="text" placeholder='apellido' name="apellido"/>
        <input type="text" placeholder='edad' name="edad"/>
        <input type="text" placeholder='alias' name="alias" />
        <input type="text" placeholder='avatar' name="avatar" />
        <input type="text" placeholder='texto' name="text" />
        <button type='submit' >Enviar Mensjae</button>
      </form>
      <div className='footer'>
        <Mensajes obj={{id: obj[0].id, nombre: obj[0].nombre, apellido: obj[0].apellido, edad: obj[0].edad, texto: obj[0].texto}} />
      </div>
    </div>
  )
}

export default App;
