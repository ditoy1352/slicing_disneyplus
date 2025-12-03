import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Movies from "./pages/Movies"
import ContentTvSeriesDetail from "./pages/ContentTvSeriesDetail"
import MoviesDetail from "./pages/ContentMoviesDetail"
import Series from "./pages/tv"
import Login from "./pages/login"
import Signup from "./pages/signup"

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
                path:"tv/:id",
                element:<ContentTvSeriesDetail/>
            },
            {
                path:"movie/:id",
                element:<MoviesDetail/>
            },
            {
                path:"Series",
                element:<Series/>
            },
            {
                path:"Movies",
                element:<Movies/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"signup",
                element:<Signup/>
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
