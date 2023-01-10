import useRequest from '../hooks/useRequest';
import { setCredentials } from "../redux/AdministradorSlice";
import useLocalStorage from '../hooks/useLocalStorage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addOrdenes } from '../redux/carroSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useLocalStorage("user", "");
    const ordenes = useSelector((state) => state.carro.ordenes);
    const { doSend, errors } = useRequest({
        url: `/api/ordenes/${user.id}`,
        method: "get",
        onSuccess: (obj) => {
            if (obj.ok) {
                dispatch(addOrdenes(obj.ordenes.data))
            }
        }
    });

    useEffect(() => {
        doSend()
    }, [])
    return (
        <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12'>
            <h1 className="text-lg">Carro de compras</h1>
            {ordenes?.map((orden) => {
                return (<div>
                    <ul>
                        <li>Fecha: {orden.dateOfJoining}</li>
                        {orden.orden.map(valorOrden => <li>{valorOrden.producto}</li>)}
                    </ul>
                </div>)
            })}
        </div>
    )
}

export default Cart