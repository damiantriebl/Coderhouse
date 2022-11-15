import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import useRequest from '../hooks/useRequest';
import { useNavigate } from "react-router-dom";
import { setCredentials } from '../redux/AdministradorSlice'
import SingUp from './SingUp';
import Login from './Login';
import { setError } from '../redux/ErrorSlice';

const Home = (props = []) => {
    const loginRedux = useSelector((state) => state.administrador.userId);
    const error = useSelector((state) => state.err);
    const navigate = useNavigate();
    const [password, setPassword] = useState(loginRedux.pass || "");
    const [isLogin, setIsLogin] = useState(true);
    const [parametro, setparametro] = useState({ email: '', password: '', nombre: '', edad: '', direccion: '', avatar:'' });
    const [userId, setUserId] = useState(loginRedux.userId || "");
    const dispatch = useDispatch()

    const { doSend: doLogin, errors: errorsLogin } = useRequest({
        url: "/api/login",
        method: "post",
        body: { email: parametro.email, password: parametro.password },
        onSuccess: (usr) => {
            console.log('se envio correctamente', usr)
            if (usr.success) {
                dispatch(setCredentials(usr))
                navigate("/productos");
            } else {
                dispatch(setError(usr.message))
            }
        }
    });
    const { doSend: doSingUp, errors: errorsSingup } = useRequest({
        url: "/api/singup",
        method: "post",
        headers: {
            'content-type': 'multipart/form-data'
        },
        body: { email: parametro.email, password: parametro.password, nombre: parametro.nombre, edad: parametro.edad, direccion: parametro.direccion, avatar: parametro.avatar  },
        onSuccess: (usr) => {
            console.log('se envio correctamente', usr)
            dispatch(setCredentials(usr))
            navigate("/productos");
        }
    });
    const handleChangeLogin = () => {
        setIsLogin(!isLogin)
    }
    const handlerLogin = () => {
        doLogin()
    }
    const handleSingUp = () => {
        doSingUp()
    }
    const setParameter = (data, param) => {
        setparametro({ ...parametro, ...{ [param]: data } })
    }
    return (
        <div className='flex'>
            <img
                className="h-screen w-1/2 py-0 m-0 object-cover"
                src="https://assets.adidas.com/images/h_600,f_auto,q_auto,fl_lossy,c_fill,g_auto/3b298a54968d4443b428aef901046da2_9366/Camiseta_Alternativa_de_Juego_Argentina_22_Azul_HB9214_25_model.jpg"
            />
            <div className="flex flex-col  items-center  w-1/2  mt-20">
                <h1 className=" mx-4 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r  from-sky-600 to-blue-500">
                    Adidas 2022
                </h1>
                <div class="p-4 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                    <span class="font-medium">{error.error}</span>
                </div>
                <form className='w-96 flex-col  flex justify-center items-center mt-40'>
                    {isLogin ? <Login setParameter={setParameter} parameters={parametro} handleLogin={handlerLogin} />
                        : <SingUp setParameter={setParameter} parameters={parametro} handleSingUp={handleSingUp} />}
                    <div
                        className=" text-sm text-gray-500 my-10"
                    >
                        O si necesitas una cuenta nueva
                    </div>
                    <button
                        type="button"
                        onClick={handleChangeLogin}
                        className="text-white bg-gradient-to-r from-sky-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Darse de alta
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Home;
