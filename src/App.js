import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[Mode,  setMode] = useState('light')
  const[alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () =>{
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert('Dark mode has been enabled', 'success')
    }
    else if(Mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Dark mode has been disabled', 'success')
    }
  }
  return (
    <>
      <Router>
        <Navbar Mode = {Mode} toggleMode = {toggleMode}/>
        <Alert alert = {alert}/>
        <div className='container'>
        <Routes>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/' element={<TextForm heading="Enter text to analyze" Mode = {Mode} showAlert = {showAlert}/> } />
        </Routes>
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
