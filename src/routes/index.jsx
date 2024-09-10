import {
    createBrowserRouter,
  } from "react-router-dom";
  import { MainLayout } from '../layouts';
  import { About, App, Login } from '../pages';

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
        },
        {
          path: 'about',
          element: <About />
        }
      ],
    }
  ]);


  export default router;