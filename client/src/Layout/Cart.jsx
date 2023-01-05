import useRequest from '../hooks/useRequest';
import { setCredentials } from "../redux/AdministradorSlice";
import useLocalStorage from '../hooks/useLocalStorage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

const Cart = () =>{
    const dispatch = useDispatch();
    const [user, setUser] = useLocalStorage("user", "");
    console.log('dtcon usuario', user)
    const { doSend, errors } = useRequest({
        url: `/api/ordenes/${user.id}`,
        method: "get",        
    }); 
    useEffect(() => {
        if(user){
            dispatch(setCredentials(user))
       }
    }, []) 
    useEffect(()=>{
        doSend()
    },[])
 //  const cart = useSelector((state) => state.carro.cart);
    return (
        <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12'>
            <h1 className="text-lg">Carro de compras</h1>
         {/*   {cart.map(()=>{
                return <h1>hola</h1>
           })} */}
        </div>                
    )
}

export default Cart