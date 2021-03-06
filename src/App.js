
import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);


  const showAlert = (message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
   setAlert(null); 
  }, 3000);
  }
  const toggleMode = ()=>{
   if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor ='#08114a';
    showAlert("Dark mode has been enabled" ,"success");
    document.title ='TextUtils- Dark Mode'
   }
   else{
    setMode('light')
    document.body.style.backgroundColor ='white'
    showAlert("Light mode has been enabled" ,"success")
    document.title ='TextUtils- Light Mode'
   }
  }
  return (
    <>
 <Router>
<Navbar title="textUtils2" aboutText="about us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
{/* <Navbar/> */}
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={<About />}/>
           
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
 </Routes>        
</div>
</Router>

    </>
    
  );
}

export default App;
