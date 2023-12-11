import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Components
import Home from "./screens/HomeScreen";
import Admin from "./screens/AdminScreen";
import Panel from "./screens/PanelScreen";
//Old Components
import PersistLogin from "./components/olds/PersistLogin";
import RequireAuth from "./components/olds/RequireAuth";
import Missing from "./components/olds/Missing";
import Unauthorized from "./components/olds/Unauthorized";
//Constants
import Roles from "./constants/Roles";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "unauthorized",
      element: <Unauthorized/>,
    },
    {
      path: "privacy_policy",
      element: null, //This is for privacy policy or other terms..
    },
    {
      path: "admin",
      element: <Admin />,
    },
    {
      element: <PersistLogin />,
      children: [
        {
          element: <RequireAuth allowedRoles={[Roles.Admin]} />,
          children: [
            {
              path: "panel",
              element: <Panel />,
            },
            //Other paths here..
          ],
        },
      ],
    },
    {
      path: "/*",
      element: <Missing />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
