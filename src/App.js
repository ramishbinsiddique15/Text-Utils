import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';
function App() {
  const[mode, setMode] = useState('light');
  const [text, setText] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
    setMode('dark');
    setText('Enable Light Mode');
    document.body.style.backgroundColor = '#3e4347';
    showAlert("Dark Mode Enabled","success")
    document.title = 'TextUtils | Dark Mode'
  }
  else{
    setMode('light');
    setText('Enable Dark Mode');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode Enabled","success")
    document.title = 'TextUtils | Light Mode'
  }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode = {toggleMode} text={text}/>
      
      
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert}heading="Enter the text to analyze" mode={mode} toggleMode = {toggleMode}/>}></Route>
        </Routes>
      
      </div>
      </Router>
    </>
  );
}

export default App;
