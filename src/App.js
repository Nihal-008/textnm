import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  const [mode, setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  // const [newmode, setnewMode]=useState('green');
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
    setAlert(null);
    }, 1500);
  }
  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
  }
  const toggleMode =(cls) =>{
    console.log(cls)
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
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
  // const greenMode =() =>{
  //   if(newmode === 'light'){
  //     setnewMode('green');
  //     document.body.style.backgroundColor ='green';
  //     showAlert("Dark mode has been enabled","success");
  //   }
  //   else{
  //     setnewMode('light');
  //     document.body.style.backgroundColor ='white';
  //     showAlert("light mode has been enabled","success"); 
  //   }

  // }

  return (
 <>
<BrowserRouter>
<Navbar title="textutils" about="aboutus" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
            <Route exact path="/About" element={<About />}>
            </Route>
            <Route exact path="/TextForm" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
<TextForm showAlert={showAlert} heading="Enter the text to analyse"  mode={mode}/>
<About mode={mode}/>
</div>
</BrowserRouter>
 </>
  );
}

export default App;
