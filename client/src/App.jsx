import { useState } from 'react'
import Mensajes from './mensajes';
import { faker } from '@faker-js/faker';
import axios from 'axios'
import './App.css'
import useRequest from './hooks/useRequest';



const App = () => {
  const [body, setBody] = useState();
  const {doSend , errors } = useRequest({
    url: `/mensaje`,
    method: "post",
    body: body,
    onSuccess: (objs) =>{ console.log(objs)}
  });
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const data = {
      author:{
        id: e.target[0].value,
        nombre:  e.target[1].value,
        apellido: e.target[2].value,
        edad: e.target[3].value,
        alias:  e.target[4].value,
        avatar:  e.target[5].value,
      },
      text:   e.target[6].value,    
    }
    console.log(data)
    setBody(data)
    doSend();
  }

  
  
  const fakerObjects = () =>{
    const fake = {
        author:{
            id: faker.internet.email(),
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            edad: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
            alias: faker.lorem.word(),
            avatar: faker.image.people() 
        },
        text:  faker.lorem.words(10)        
    }    
    return fake
  }
  let objetos = []
  for(let i=0; i<5; i++){
    objetos.push(fakerObjects())
  }
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
        {objetos.map((obj)=> <Mensajes obj={obj} />)}
       
      </div>
    </div>
  )
}

export default App;
