import React from 'react';
import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage/UsersPage";
import {usersLoader} from "./loaders/usersLoader";
import {UserDetailsPage} from "./pages/UserDetailsPage/UserDetailsPage";
import {userDetailsLoader} from "./loaders/userDetailsLoader";
import {PostsPage} from "./pages/PostsPage/PostsPage";
import {postsLoader} from "./loaders/postsLoader";
import {PostDetailsPage} from "./pages/PostDetailsPage/PostDetailsPage";
import {postDetailsLoader} from "./loaders/postDetailsLoader";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";
import {commentsLoader} from "./loaders/commentsLoader";

const router = createBrowserRouter([
    {path:'',element:<MainLayout/>, children:[
        {path:'users',element: <UsersPage/>, loader: usersLoader,children:
                [{path:':id/user-details',element:<UserDetailsPage/>,loader:userDetailsLoader, children:
                        [{path:'posts',element:<PostsPage/>,loader:postsLoader}]}]},
        {path:'posts/:id/post-details',element:<PostDetailsPage/>,loader:postDetailsLoader,children:[
                {path:'comments',element: <CommentsPage/>,loader:commentsLoader}
            ]}
        ]}
])

export {router};