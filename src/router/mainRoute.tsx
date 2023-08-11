import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import TaskScreen from "../pages/screen/TaskScreen"
import Register from "../pages/auth/Register"
import SignIn from "../pages/auth/SignIn"
import PrivateRoute from "./PrivateRoute"

export const mainRoute = createBrowserRouter([
    {
       path : "/",
       element : <Layout />,
       children : [
        {
            index : true,
            element : 
            <PrivateRoute>
            <TaskScreen />
            </PrivateRoute>
        }
       ] 
    },
    {
        path : "/register",
        element : <Register />
    },
    {
        path : "/signin",
        element : <SignIn />
    },
]) 