import './App.css'
import { Routes , Route } from 'react-router-dom'
import Login from './components/Login/index'
import Home from './components/Home/index'
function App() {
  return (
    <>
      <Routes>
        <Route path='/login' Component={Login}/>
        <Route path='/home' Component={Home} />
      </Routes> 
    </>
  )
}

export default App
