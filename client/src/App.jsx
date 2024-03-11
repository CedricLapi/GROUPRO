
import './App.css'
import {Routes, Route} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';

function App() {
  

  return (
    <>
    <h1>Hello world!</h1>
    <Routes>
      <Route path="/" element={<RegisterForm />} />
      <Route path="/ideas" element={<Dashboard />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
    </>
  )
}

export default App
