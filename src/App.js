import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
  ]);

  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
