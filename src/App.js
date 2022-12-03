import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { TextForm } from './componment/TextForm';

import { Navbar } from './componment/Navbar';
import { About } from './componment/About';
import { useState } from 'react';
import { Alert } from './componment/Alert';


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
      document.body.style.backgroundColor = '#032744';
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

  <BrowserRouter>
    <Navbar title="TextUtils" alt="About TextUtils"  mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>

     
      <div className='container my-3 innerwrapper'>
      <Routes>
        <Route path='/' element={<TextForm showAlert={showAlert} heading="Our Form" mode={mode}/>}></Route>
        <Route path='/About' element={<About mode={mode} />}></Route>
      </Routes>
     </div>
     


  </BrowserRouter>


     
   


    </>

  );
}

export default App;
