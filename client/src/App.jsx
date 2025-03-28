import './App.css'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/index/Index'
import Ask from './pages/index/Ask'
import Answ from './pages/index/Answ'
import Score from './pages/index/Score'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element= {<Index/>}/>
        <Route path='/question' element= {<Ask/>}/>
        <Route path='/answer' element= {<Answ/>}/>
        <Route path='/score' element= {<Score/>}/>
      </Routes>
    </>
  )
}

export default App
