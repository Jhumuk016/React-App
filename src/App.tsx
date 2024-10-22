import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/Error-Page';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PatientDetails from './Components/PatientDetails/PatientDetails'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
 const router = createBrowserRouter([
    {
      path:'/',
      element: <Home />,
      errorElement : <ErrorPage />,
    },
    {
      path: "patient/:patientId",
      element: <PatientDetails />,
    },
  ])

  return (
  <>
     <Header />
     <div className='body'>
     <RouterProvider router={router} />
     </div>
     <Footer />
  </>
  )
}

export default App
