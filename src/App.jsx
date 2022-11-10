import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routes/Router'
import 'react-photo-view/dist/react-photo-view.css';

function App() {

  return (
    <div className="container mx-auto">
      <RouterProvider router={router}/>
      <Toaster position="top-left" />
    </div>
  )
}

export default App
