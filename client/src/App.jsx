import './App.css'
import { Routes, Route } from 'react-router-dom'
import QuestionPage from './pages/QuestionPage'
import LoginPage from './pages/LoginPage'
import DevInput from './pages/DevInput'
import UserAnswer from './pages/UserAnswer'
import Index from './pages/Index'
import SelectQuiz from './pages/SelectQuiz'
import SelectCategory from './pages/SelectCategory'
import QuizPage from './pages/QuizPage'
import ScoreBoard from './pages/ScoreBoard'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element= {<Index/>}/>
        <Route path="/quiz/:quizId" element= {<QuizPage/>}/>
        <Route path="/selectCategory/quiz/:quizId/session/:sessionId" element={<SelectCategory />} />
        <Route path="/userAnswer/:quizId/session/:sessionId" element={<UserAnswer/>} />
        <Route path="/question/:quizId/:sessionId" element={<QuestionPage />} />
        <Route path="/login" element= {<LoginPage/>}/>
        <Route path="/devInput" element= {<DevInput/>}/>
        <Route path="/selectQuiz" element= {<SelectQuiz/>}/>
        <Route path="/scoreBoard/quiz/:quizId/session/:sessionId" element={<ScoreBoard />} />
      </Routes>
    </>
  )
}

export default App
