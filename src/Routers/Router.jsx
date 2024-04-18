import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home";
import AllPosts from "../Pages/AllPages/AllPages";
import Article from "../Pages/Article/Article";
import Event from "../Pages/Event/Event";
import Education from "../Pages/Education/Education";
import Job from "../Pages/Job/Job";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        element: <AllPosts></AllPosts>
                    },
                    {
                        path: '/article',
                        element: <Article></Article>
                    },
                    {
                        path: '/event',
                        element: <Event></Event>
                    },
                    {
                        path: '/education',
                        element: <Education></Education>
                    },
                    {
                        path: '/job',
                        element: <Job></Job>
                    },
                ]
            }, 
            
        ]
    }
])

export default router;