
import './App.css'
import {Routes, Route} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';

function App() {
  

  return (
    <>
    <h1>Hello world!</h1>
    <Routes>
      <Route path="/" element={<RegisterForm />} />
      <Route path="/api/ideas" element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default App
