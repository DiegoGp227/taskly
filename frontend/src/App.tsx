import './App.css'
import { Routes , Route } from 'react-router-dom'
import LoginPage from "./pages/Login/LoginPage.tsx";
// import Login from './components/Login/index'
import './style/style.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' Component={LoginPage}/>
        {/* <Route path='/login' Component={Login}/> */}
        {/* <Route path='/home' Component={Home} /> */}
      </Routes> 
    </>
  )
}

export default App
