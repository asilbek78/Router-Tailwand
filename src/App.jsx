import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./Home/Home"
import FirstPage from "./FirstPage/FirstPage"
import SecondPage from "./SecondPage/SecondPage"
import Navbar from "./Navbar/Navbar"

export default function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
        // Router+Tailwand
        {
          path: "/",
          element: <Home/>
        },
        {
          path:"/firstpage",
          element:<FirstPage/>
        },
        {
          path:"/secondpage",
          element:<SecondPage/>
        },
        {
          path: "/navbar",
          element:<Navbar/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
