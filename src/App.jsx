import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx'
import Tasks from './components/Tasks.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /><Footer /></>
    },
    {
      path: "/tasks",
      element: <><Navbar /><Tasks /><Footer /></>
    },
  ])

  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App
