
const Product = ({producto, precio, thumbnail }) => { 
    
    return (
        <div className=" bg-white rounded-lg shadow-md w-80 m-4">       
            <img className="rounded-t-lg w-full" src={thumbnail} alt={producto} />   
            <div className="px-5 pb-5 ">
                <a href="#">
                    <h5 className="text-xl my-4 font-semibold tracking-tight text-gray-900 dark:text-white">{producto}</h5>
                </a>
            
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${precio}</span>
                    <a href="#" className="text-white bg-gradient-to-r from-sky-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ml-4 px-5 py-2.5 text-center ">Agregar al carro</a>
                </div>
            </div>
    </div>
    )
}
export default Product;