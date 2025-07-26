import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Home.jsx'
import About from './About.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
])

const RoutingPage = () => {
    return <RouterProvider router={router}></RouterProvider>
}
export default RoutingPage
