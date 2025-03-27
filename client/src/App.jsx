import './App.css'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/index/Index'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element= {<Index/>}/>
      </Routes>
    </>
  )
}

export default App
