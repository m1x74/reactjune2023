import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {TodosPage} from "./pages/TodosPage";
import {CommentsPage} from "./pages/CommentsPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {HomePage} from "./pages/HomePage";
import {PostPage} from "./pages/PostPage";

const router=createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {path:'',element:<HomePage/>},
            {path:'todos',element:<TodosPage/>},
            {path:'comments',element:<CommentsPage/>, children:[
                    {path: 'post', element:<PostPage/>}
                ]},
            {path:'albums',element:<AlbumsPage/>},

        ]
    }
])

export {router}