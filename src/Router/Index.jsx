import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import Blog,{loaderBlog} from '../pages/Blog'
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import Post,{loaderPost} from "../pages/Post";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<LayoutPublic/>,
        errorElement: <NotFound/>,
        children:[
            {
                errorElement:<NotFound/>,
                children:[

                    {
                        index:true,
                        element: <Home />,
                    },
                
                    {
                        path:'/about',
                        element: <About/>,
                    },
                    {
                        path:'/blog',
                        element: <Blog/>,
                        loader:loaderBlog
                    },
                    {
                        path:'/blog/:id',
                        element: <Post/>,
                        loader:loaderPost
                    }
        
                ]

            },
           
        ]

    }
])