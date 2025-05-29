import './App.css'
import { Routes , Route } from 'react-router-dom'
<<<<<<< HEAD
import Login from './components/Login/index'
import Home from './components/Home/index'
=======
// import Login from './components/Login/index'
import LoginPage from "./pages/loginPage.tsx";
import './style/style.css'

>>>>>>> 7e8bddcf1328fad6cbb0c33feb062d191c3ad26a
function App() {
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path='/login' Component={Login}/>
        <Route path='/home' Component={Home} />
=======
        <Route path='/login' Component={LoginPage}/>
>>>>>>> 7e8bddcf1328fad6cbb0c33feb062d191c3ad26a
      </Routes> 
    </>
  )
}

export default App
