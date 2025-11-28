import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Series from "./pages/Series"
import Movies from "./pages/Movies"
import ContentTvSeriesDetail from "./pages/ContentTvSeriesDetail"
import ContentMovieDetail from "./pages/ContentMovieDetail"

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
                path:"content-tvSeries-detail",
                element:<ContentTvSeriesDetail/>
            },
            {
                path:"content-movie-detail",
                element:<ContentMovieDetail/>
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
