import './App.css'
import { Routes , Route } from 'react-router-dom'
import LoginPage from "./pages/Login/LoginPage.tsx";
import HomePage from './pages/Home/HomePage.tsx'
import './style/style.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' Component={LoginPage}/>
        <Route path='/home' Component={HomePage}/>
        {/* <Route path='/home' Component={Home} /> */}
      </Routes> 
    </>
  )
}

export default App
