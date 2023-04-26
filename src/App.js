import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeComponent from './Components/HomeComponents'
import AboutComponent from './Components/AboutComponent'
import BlogComponent from './Components/BlogComponent/BlogComponent'
import EventComponent from './Components/EventComponent/EventComponent'
import TeamComponent from './Components/TeamComponent'
import ContactComponent from './Components/ContactComponent'
import MemberReg from './Components/MemberRegistration/MemberReg'
import SingleBlog from './Components/BlogComponent/SingleBlog/SingleBlog'

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
      path: '/blogs/blog-detail/:id',
      element: <SingleBlog />
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
      path: '/contactus',
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