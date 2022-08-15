import zapa from '../assets/zapa-logo.svg'
import useSocket from '../hooks/useSockect';
import { useState } from 'react';

const DrawnerForm = () => {
    const [producto, setProducto] = useState("")
    const [precio, setPrecio] = useState(0)
    const [thumbnail, setThumbnail] = useState("")
    const {doRequest} = useSocket({
      room: 'producto',
      body: {
        producto,
        precio,
        thumbnail
      },  
    });
  return (
    <div id="drawer-example" className="absolute z-40 h-full p-4 mt-40 overflow-y-auto bg-white w-96" tabindex="-1" aria-labelledby="drawer-label">
       <h5 id="drawer-label" className="inline-flex items-center mb-4 text-lg mb-12 font-semibold text-gray-500 dark:text-gray-400">
       <img src={zapa} className="w-10 mr-4" /> Ingresar Producto </h5>
       <form>
        <div className="relative z-0 mb-6 w-full group">
            <input type="text" name="producto" id="producto" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={(e) => setProducto(e.currentTarget.value)} placeholder="" required />
            <label for="producto" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre del producto</label>
        </div>      
        <div className="relative z-0 mb-6 w-full group">
            <input type="number" name="precio" id="precio" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => setPrecio(e.currentTarget.value)} min="1" required />
            <label for="precio" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Precio</label>
        </div>  
        <div className="relative z-0 my-10 w-full group">
            <input type="text" name="thumbnail" id="thumbnail" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" onChange={(e) => setThumbnail(e.currentTarget.value)} required />
            <label for="thumbnail" className="peer-focus:font-medium  absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Url de la imagen</label>
        </div>       
        <button type="button" onClick={doRequest} className="text-white bg-gradient-to-r from-sky-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar Zapa</button>
        </form>
    </div>
  );
};

export default DrawnerForm;
