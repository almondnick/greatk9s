import  ReactDOM  from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Login from './pages/LoginSignUp.jsx';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import BookNow from './pages/BookNow';
import Services from './pages/Services';
import UserAppointments from './pages/UserAppointments.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/aboutus',
                element: <AboutUs />
            },
            {
                path: '/booknow',
                element: <BookNow />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/userappointments',
                element: <UserAppointments/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)