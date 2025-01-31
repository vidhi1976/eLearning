
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import HeroSection from './pages/student/HeroSection'
import { RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout'
const appRouter = createBrowserRouter([
  {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          path:"/",
          element:
          <>
          <HeroSection/>
          {/* Course */}
          </>
        },
        {
          path:"/login",
          element:<Login/>
        }
      ]

  }
])
function App() {
  
  return (
    <main>
        <RouterProvider router={appRouter}/>
    </main>
    
      
  )
}

export default App
