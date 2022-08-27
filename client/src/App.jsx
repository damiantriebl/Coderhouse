import Comments from './Layout/Comments'
import Products from './Layout/Products';
import Nav from './Layout/Nav';
import { Routes, Route, Link } from "react-router-dom";
import Cart from './Layout/Cart';
function App() { 
  return (
    <div className="App">
      <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12'>
        <Nav  />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="carrito/:userId" element={<Cart />} />
        </Routes>
      </div>
      <Comments />
    </div>
  )
}

export default App
