import {Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header'
import Contact from './Pages/Contact'
function App() {

  return (
    <>
      <div>
        <Header />
      </div>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </>
  )
}

export default App
