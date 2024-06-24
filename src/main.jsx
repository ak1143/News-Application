import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { 
  Home,
  Business,
  Entertainment,
  Health,
  Science,
  Technology,
  Sport
  } from './pages/index.js';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children : [
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/business",
        element:<Business />
      },
      {
        path:"/entertainment",
        element:<Entertainment />
      },
      {
        path:"/health",
        element:<Health />
      },{
        path:"/science",
        element:<Science />
      },
      {
        path:"/technology",
        element:<Technology />
      },
      {
        path:"/sport",
        element:<Sport />
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
