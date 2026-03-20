import { createBrowserRouter } from "react-router-dom";
import MainOutlet from "./components/MainOutlet";
import Login from "./components/Login";
import App from "./App.jsx";
import Signup from "./components/Signup.jsx";
import UserOutlet from "./components/UserOutlet.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import ChatScreen from "./components/ChatScreen.jsx";

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainOutlet />,
        errorElement: <>error page</>,
        children: [
            { index: true, element: <Login /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> }
        ]


    },
    {
        path: "/user",
        element: <UserOutlet />,
        children:[
            { index: "/user", element: <UserDashboard/> },
            { path: "chat", element: <ChatScreen/> }
          
          
        ]
    }
])

export default route