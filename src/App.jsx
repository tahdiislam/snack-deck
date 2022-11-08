import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routes/Router'

function App() {

  return (
    <div className="container mx-auto">
      <RouterProvider router={router}/>
      <Toaster />
    </div>
  )
}

export default App
