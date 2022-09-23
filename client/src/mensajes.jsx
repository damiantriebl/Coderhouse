const mensajes = ({obj}) =>{
    console.log(obj)
    return (
        <div>
            <img src={obj.author.avatar} />
            <h3>{obj.author.nombre}</h3>
            <h4>{obj.author.apellido}</h4>
            <h4>{obj.text}</h4>
        </div>
    )
}
export default mensajes
