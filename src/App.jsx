import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import ProjectsPage from './Pages/ProjectsPage';
import AboutPage from './Pages/AboutPage';
import CertificationPage from './Pages/CertificationPage';
import ProjectPage from './Pages/ProjectPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/about",
          element: <AboutPage />
        },
        {
          path: "/projects",
          element: <ProjectsPage />
        },
        {
          path: "/project/:id",
          element: <ProjectPage />
        },
        {
          path: "/certification",
          element: <CertificationPage />
        },
        {
          path: "/contact",
          element: <ContactPage />
        }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
