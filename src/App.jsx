import {Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header'
import Contact from './Pages/Contact'
import Home from './Pages/Home';
function App() {

  return (
    <>
      <div>
        <Header />
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </>
  )
}

export default App
