import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

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
      <Navbar Mode = {Mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className='container'>
        <TextForm heading="Enter text to analyze" Mode = {Mode} showAlert = {showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
