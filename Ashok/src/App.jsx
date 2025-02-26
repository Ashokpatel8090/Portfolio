import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';

import AppLayout from './components/AppLayout';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  const router = createBrowserRouter([
   
    {
      path:"/",
      element:<AppLayout/>,
      children: [
                {
                  path: "/",
                  element: <Home />,
                },
                {
                  path: "about",
                  element: <About />,
                },
                {
                  path: "experience",
                  element: <Experience/>,
                },
                {
                  path: "project",
                  element: <Projects />,
                },
                {
                  path: "contact",
                  element: <Contact />,
                },
                
              ]
    },
   
    
  ])
  return (
    <>
    <RouterProvider router={router} />;
    </>
  )
}

export default App