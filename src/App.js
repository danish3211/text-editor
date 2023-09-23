
import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms'
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Rout,
//   Link
// } from "react-router-dom";
function App() {

  const [mode , setMode] = useState ('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1700);
  }

  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode =(cls)=>{
    removeBodyClasses();
    console.log(cls)
      document.body.classList.add('bg-'+cls)
    if (mode === 'light'){
      setMode  ('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert ("darkmode hase benn enabled","success");
    }
    else {
      setMode  ('light');
      document.body.style.backgroundColor = 'white';
      showAlert ("lightmode hase benn enabled","success");

    }  
  }
  return (
   <>
   
   <Navbar title="Taxtutils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className='container my-5'>
    
      
      
      <Textforms showAlert={showAlert} heading='enter text here'mode={mode}/>
     
    
    
     </div>
     
   
  </>
  );
}

export default App;
