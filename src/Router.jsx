import { createBrowserRouter } from "react-router-dom";
import MainOutlet from "./components/MainOutlet";
import Login from "./components/Login";
import App from "./App.jsx";
import Signup from "./components/Signup.jsx";

const route = createBrowserRouter([
    {
        Path: "/",
        element: <MainOutlet />,
        errorElement: <>error page</>,
        children: [
            { index: true, element: <Login /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },

        ]


    }
])

export default route