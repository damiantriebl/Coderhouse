import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import useRequest from '../hooks/useRequest';
import { useNavigate } from "react-router-dom";
import {setCredentials} from '../redux/AdministradorSlice'

const Home = (props = []) => {
    const loginRedux = useSelector((state) => state.administrador.userId);
    const navigate = useNavigate();
    const [pass, setPass] = useState(loginRedux.pass || "");
    const [login, setLogin] = useState(true);
    const [userId, setuserId] = useState(loginRedux.userId || "");
    const dispatch = useDispatch()

    const { doSend: doLogin, errors: errorsLogin } = useRequest({
        url: "/api/login",
        method: "post",
        body: { userId, pass },
        onSuccess: (usr) => {
            console.log('se envio correctamente')
            dispatch(setCredentials(usr))
            navigate("/productos");
        }
    });
    const { doSend: doUser, errors: errorsUser } = useRequest({
        url: "/api/user",
        method: "get",
        onSuccess: (obj) => console.log('usuario', obj)
    });
    const handlerSignup = () => {
        doSignUp()
    }
    const handlerLogin = () => {
        doLogin()
    }
    const handlerUse = () => {
        doUser()
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
                <form className='w-96 flex-col  flex justify-center items-center mt-40'>
                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            type="text"
                            name="userId"
                            id="userId"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            onChange={(e) => setuserId(e.currentTarget.value)}
                            placeholder=""
                            value={userId}
                            required
                        />
                        <label
                            htmlFor="userId"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Nombre del Usuario
                        </label>
                    </div>
                    {!login &&
                        <><input
                            type="text"
                            name="userId"
                            id="userId"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            onChange={(e) => setuserId(e.currentTarget.value)}
                            placeholder=""
                            value={userId}
                            required /><label
                                htmlFor="userId"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Nombre del Usuario
                            </label></>
                    }

                    <div className="relative z-0 mb-6 w-full group">
                        <input
                            type="text"
                            name="pass"
                            id="pass"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={(e) => setPass(e.currentTarget.value)}
                            value={pass}
                            required
                        />
                        <label
                            htmlFor="pass"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Contraseña
                        </label>
                    </div>
                    <button
                        type="button"
                        onClick={handlerLogin}
                        className="text-white bg-gradient-to-r from-sky-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Ingresar

                    </button>
                    <div
                        className=" text-sm text-gray-500 my-10"
                    >
                        O si ya tiene una cuenta
                    </div>
                    <button
                        type="button"
                        onClick={handlerSignup}
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
