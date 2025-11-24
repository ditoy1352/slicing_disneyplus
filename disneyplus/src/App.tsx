import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/Home"
import Search from "./pages/Search"
import ContentDetail from "./pages/ContentDetail"
import Series from "./pages/Series"
import Movies from "./pages/Movies"

const router = createBrowserRouter ([
    {
        path:"/",
        element:<Layout />,
        children:[
            {
                index: true,
                element:<Home/>
            },
            {
                path:"search",
                element:<Search/>
            },
            {
                path:"content-detail",
                element:<ContentDetail/>
            },
            {
                path:"Series",
                element:<Series/>
            },
            {
                path:"Movies",
                element:<Movies/>
            },
        ]
    }
])
function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
