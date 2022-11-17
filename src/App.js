import logo from './logo.svg';
import './App.css';
import { Navbar } from './componment/Navbar';
import { TextForm } from './componment/TextForm';
import { About } from './componment/About';
import { useState } from 'react';
import { Alert } from './componment/Alert';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert('Dark mode has been enable', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = '#fff';
      showAlert('Light mode has been enable', 'success')
    }
  }

  return (

    <>

    <Navbar title="TextUtils" alt="About TextUtils"  mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>

      <div className='container my-3'>
     <TextForm showAlert={showAlert} heading="Our Form" mode={mode}/>
     </div>

     <About mode={mode} />


    </>

  );
}

export default App;
