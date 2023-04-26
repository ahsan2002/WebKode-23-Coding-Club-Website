import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeComponent from './Components/HomeComponents'
import AboutComponent from './Components/AboutComponent'
import BlogComponent from './Components/BlogComponent'
import EventComponent from './Components/EventComponent/EventComponent'
import TeamComponent from './Components/TeamComponent'
import ContactComponent from './Components/ContactComponent'
import MemberReg from './Components/MemberRegistration/MemberReg'

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
      path: '/team',
      element: <TeamComponent />
    },
    {
      path: '/contact-us',
      element: <ContactComponent />
    },
    {
      path: '/member-registration',
      element: <MemberReg />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App