import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,  createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services.jsx'
import Contact from './Contact.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />,
    children:[
      {path: "/", element: <Home />},
      {path: "/about", element: <About />},
      {path: "/services", element: <Services />},
      {path: "/contact", element: <Contact />}
    ]
  },
  {path: '/about', element: <About />}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
