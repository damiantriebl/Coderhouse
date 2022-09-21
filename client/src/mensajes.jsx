const mensajes = ({obj}) =>{
    return (
        <div>
            <img src={obj.avatar} />
            <h3>{obj.nombre}</h3>
            <h4>{obj.apellido}</h4>
            <h4>{obj.edad}</h4>
        </div>
    )
}
export default mensajes
