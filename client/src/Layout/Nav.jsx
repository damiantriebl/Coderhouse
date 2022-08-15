import { useState } from "react";
import logo from "../assets/adidas-logo.svg";
import useSocket from "../hooks/useSockect";
import DrawnerForm from "./DrawnerForm";
const Nav = () => {
  const { isConnected } = useSocket({});
  const [open, setOpen] = useState(false);
  const handlerOpen = () => {
    setOpen(!open);
  } 
  return (
    <>
    {open && <DrawnerForm  open={open}/>}
    <nav className="bg-white px-2 sm:px-4 py-2  mb-10 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <img src={logo} className="w-16 h-16 " alt="Adidas" />
        <h1 className="mx-4 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r  from-sky-600 to-blue-500">
          Adidas WebSocket
        </h1>
        <div className="flex">
        <button
          type="button"
          className={` ${
            isConnected ? "text-green-600" : "text-red-700"
          } border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 mr-5 text-center `}
        >
          {isConnected ? "Conectado" : "Desconectado"}
        </button>
        <button
          class="text-white bg-gradient-to-r from-sky-600 to-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none "
          onClick={handlerOpen}
        >Ingresar Producto</button>
      </div>
      </div>
    </nav>
       
    </>
  );
};
export default Nav;
