const SingUp = ({ setParameter, parameters, handleSingUp }) => {
    const { email, password, nombre, edad, direccion } = parameters;
    return (
        <>
            <div className="relative z-0 mb-6 w-full group">
                <input
                    type="text"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={(e) => setParameter(e.currentTarget.value, 'email')}
                    value={email}
                    required
                />
                <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    email
                </label>
            </div>

            <div className="relative z-0 mb-6 w-full group">
                <input
                    type="text"
                    name="password"
                    id="password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={(e) => setParameter(e.currentTarget.value, 'password')}
                    value={password}
                    required
                />
                <label
                    htmlFor="password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Contraseña
                </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={(e) => setParameter(e.currentTarget.value, 'nombre')}
                    value={nombre}
                    required
                />
                <label
                    htmlFor="nombre"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    nombre
                </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input
                    type="text"
                    name="direccion"
                    id="direccion"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={(e) => setParameter(e.currentTarget.value, 'direccion')}
                    value={direccion}
                    required
                />
                <label
                    htmlFor="direccion"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    direccion
                </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input
                    type="number"
                    name="edad"
                    id="edad"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={(e) => setParameter(e.currentTarget.value, 'edad')}
                    value={edad}
                    required
                />
                <label
                    htmlFor="edad"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    edad
                </label>

            </div>
            <button
                type="button"
                onClick={handleSingUp}
                className="text-white bg-gradient-to-r from-sky-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Cargar el usuario
            </button>
        </>

    )
}
export default SingUp