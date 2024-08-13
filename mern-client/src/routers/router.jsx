import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import Home from "../home/Home.jsx";
  import Shop from "../shop/Shop.jsx";
  import About from "../components/About.jsx";
  import SingleBook from "../shop/SingleBook.jsx";
  import DashboardLayout from "../dashboard/DashboardLayout.jsx";
import UploadBook from "../dashboard/UploadBook.jsx";
import ManageBooks from "../dashboard/ManageBooks.jsx";
import EditBooks from "../dashboard/EditBooks.jsx";
import Signup from "../dashboard/Signup.jsx";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: "/shop",
            element: <Shop/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/book/:id",
            element: <SingleBook/>,
            loader: ({params}) => fetch(`https://mern-book-store-6ym5.onrender.com/book/${params.id}`)
        }
      ]
    },
    {
      path: "/admin/dashboard",
      element: <DashboardLayout/>,
      children: [
        {
          path: "/admin/dashboard/upload",
          element: <UploadBook/>
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBooks/>
        },
        {
          path: "/admin/dashboard/edit-books/:id",
          element: <EditBooks/>,
          loader: ({params}) => fetch(`https://mern-book-store-6ym5.onrender.com/book/${params.id}`)
        }
      ]
    },
    {
      path: "sign-up",
      element: <Signup/>
    }
  ]);

export default router;