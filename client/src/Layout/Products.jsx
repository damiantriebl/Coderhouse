import { useId } from "react";
import { useState, useEffect } from "react";
import Product from './Product';
import ModalConfirm from "./modalConfirm";
import useRequest from '../hooks/useRequest';
import useLocalStorage from '../hooks/useLocalStorage';
import { useDispatch, useSelector } from "react-redux";
import {addProductos} from '../redux/carroSlice'
import { setCredentials } from "../redux/AdministradorSlice";
const productos = (props = []) => {
    const dispatch = useDispatch();
    const productos = useSelector((state) => state.carro.productos)
    const [user, setUser] = useLocalStorage("user", "");
    const { doSend , errors  } = useRequest({
        url: "/api/productos",
        method: "get",
        onSuccess: (obj) => {
            if(obj.success){
                dispatch(addProductos(obj.data))
            }else {
                console.log('no hay productos')
            }
        }
    });
    useEffect(() => {
        doSend()
    }, []) 
    useEffect(() => {
        if(user ){
            dispatch(setCredentials(user))
       }
    }, []) 
    const id = useId();
    if( productos.length === 0){
        return <div>Cargando...</div>
    }
    return (
            <div className="p-5 flex flex-wrap justify-around	">
                        <ModalConfirm  />

            {productos.map((obj,index)=>{
                return (
                    <Product key={`${id}-${index}`} producto={obj.producto} precio={obj.precio} thumbnail={obj.thumbnail} id={obj.id} />
                )          
            })}
            </div>
    )
}
export default productos;