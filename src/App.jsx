
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
      
    </div>
  )
}

export default App
