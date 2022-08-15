import useSocket from './hooks/useSockect';
import Comments from './Layout/Comments'
import Products from './Layout/Products';

function App() {
  const {doRequest, isConnected} = useSocket({
    room: 'message',
    body: "hola mundo"    
  });
  return (
    <div className="App">
      <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12'>
        <h1>Adidas WebSocket</h1>
        {isConnected && <h1> esta conectado</h1>}
        <Products />
      </div>
      <Comments />
    </div>
  )
}

export default App
