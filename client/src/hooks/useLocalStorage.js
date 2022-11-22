import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
       // si no se llama desde un navegador, que tire solo el valor inicial
      return initialValue;
    }
    try {
      // lenvata el item con el key  
      const item = window.localStorage.getItem(key);
      // parsear json
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // si tengo un error
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
export default useLocalStorage