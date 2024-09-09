import {
    createBrowserRouter,
  } from "react-router-dom";
  import { MainLayout } from '../layouts';
  import { App, Login } from '../pages';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
          {
              path: '',
              element: <App />,
          },
          {
            path: 'login',
            element: <Login />,
        }
      ],
    }
  ]);


  export default router;