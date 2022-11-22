import { useState } from 'react';
import { useSelector } from 'react-redux'
import SingUp from './SingUp';
import Login from './Login';


const Home = (props = []) => {
    const error = useSelector((state) => state.err);
    const [isLogin, setIsLogin] = useState(true);
    const handleChangeLogin = () =>{
        setIsLogin(!isLogin)
    }
    return (
        <div className='flex'>
            <img
                className="h-screen w-1/2 py-0 m-0 object-cover"
                src="https://assets.adidas.com/images/h_600,f_auto,q_auto,fl_lossy,c_fill,g_auto/3b298a54968d4443b428aef901046da2_9366/Camiseta_Alternativa_de_Juego_Argentina_22_Azul_HB9214_25_model.jpg"
            />
            <div className="flex flex-col  items-center  w-1/2  mt-40">                
                {error?.error &&
                <div class="p-4 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                    <span class="font-medium">{error.error}</span>
                </div> } 
                <form className='w-96 flex-col  flex justify-center items-center'>
                    {isLogin ? <Login setIsLogin={handleChangeLogin}  />
                        : <SingUp  setIsLogin={handleChangeLogin}/>}
             
                </form>
            </div>
        </div>
    );
};
export default Home;
