import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'
import { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  const [mode, setMode]=useState('dark');
  const [alert,setAlert]=useState(null);
  const [newmode, setnewMode]=useState('green');
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
    setAlert(null);
    }, 1500);
  }
  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("light mode has been enabled","success"); 
    }

  }
  const greenMode =() =>{
    if(newmode === 'light'){
      setnewMode('green');
      document.body.style.backgroundColor ='green';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setnewMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("light mode has been enabled","success"); 
    }

  }

  return (
 <>
{/* <BrowserRouter> */}
<Navbar title="textutils" about="aboutus" mode={mode} toggleMode={toggleMode} greenMode={greenMode} newmode={newmode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <Routes>
            <Route exact path="/About" element={<About />}>
            </Route>
            <Route exact path="/TextForm" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes> */}
<TextForm showAlert={showAlert} heading="Enter the text to analyse" newmode={newmode} mode={mode}/>
{/* <About/> */}
</div>
{/* </BrowserRouter> */}
 </>
  );
}

export default App;
