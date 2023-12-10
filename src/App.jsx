import { useState } from 'react'
import { Single } from './pages/Single'
import './App.css'
import { RouterProvider, NavLink, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home
    <nav>
      <NavLink to={"/menu"}>Menu</NavLink>
      <NavLink to={"/contact"}>contact</NavLink>
    </nav>
  </div>
  },
  {
    path: '/menu',
    element: <div>menu
    <nav>
      <NavLink to={"/contact"}>contact</NavLink>
      <NavLink to={"/"}>Home</NavLink>
    </nav>
  </div>
  },
  {
    path: '/menu/:id',
    element: <div><Single/>
    <nav>
      <NavLink to={"/contact"}>contact</NavLink>
      <NavLink to={"/"}>Home</NavLink>
    </nav>
  </div>
  },
  {
    path: '/contact',
    element: <div>contact
      <nav>
        <NavLink to={"/menu"}>Menu</NavLink>
        <NavLink to={"/"}>Home</NavLink>
      </nav>
    </div>
  },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

// function Home() {
//   return (
//     <header>
//       <div id='logoDiv'>
//         <img src="" alt="" />
//       </div>

//       <div id='navDiv'>
//         <a href="">les restaurants</a>
//         <a href="">menu</a>
//         <a href="">réservation</a>
//         <a href="">ou nous trouver?</a>
//       </div>

//       <div id='languageDiv'>


//       </div>
//     </header>
//   )
// }

// console.log("df");
export default App;
