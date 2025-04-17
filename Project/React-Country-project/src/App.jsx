
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Country from './pages/Country';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';
import ErrorPage from './pages/ErrorPage';



// here i'm using react-router-dom 
// and createBrowserRouter to create a router
const rounter = createBrowserRouter([

    {
        path: '/',
        element: <AppLayout />,
        errorElement:<ErrorPage/>,
        children: [ {path: '/', element: <Home />},
        {path: 'about', element: <About />},
        {path: 'contact', element: <Contact />},
        {path: 'country', element: <Country />},
    ]

    }




  ]);


function App() {

return <RouterProvider router={rounter} >
    <h1>heelo</h1>

</RouterProvider>

}

export default App;
