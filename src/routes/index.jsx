import {
    createBrowserRouter,
  } from "react-router-dom";
  import { MainLayout } from '../layouts';
  import { App, Login, About, Contact } from '../pages';

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
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ],
    }
  ]);


  export default router;