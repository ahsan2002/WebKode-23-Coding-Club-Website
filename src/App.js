import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeComponent from './Components/HomeComponents'
import AboutComponent from './Components/AboutComponent'
import BlogComponent from './Components/BlogComponent'
import EventComponent from './Components/EventComponent'
import GalleryComponent from './Components/GalleryComponent'
import TeamComponent from './Components/TeamComponent'
import ContactComponent from './Components/ContactComponent'

const App = () => {
  /** Root Routes */
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeComponent />
    },
    {
      path: '/about',
      element: <AboutComponent />
    },
    {
      path: '/blogs',
      element: <BlogComponent />
    },
    {
      path: '/events',
      element: <EventComponent />
    },
    {
      path: '/gallery',
      element: <GalleryComponent />
    },
    {
      path: '/team',
      element: <TeamComponent />
    },
    {
      path: '/contactus',
      element: <ContactComponent />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App