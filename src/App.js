import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light')
  const [AlertBox, setAlertBox] = useState(null)
  const showAlert = (type, message) => {
    setTimeout(() => {
      setAlertBox({
        msg: message,
        type: type
      })      
    }, 100);

    setTimeout(() => {
      setAlertBox(null)
    }, 1500);
  }
  const toggleMode = (event) => {
    if (Mode === 'light') {
      setMode('dark')
      showAlert("success", "Dark mode enabled")
    }
    else {
      setMode('light')
      showAlert("success", "light mode enabled")

    }
  }
  return (
    <>
      <Router>
        <div className={`bg-${Mode} min-vh-100`}>

          <Navbar title="TextUtils" about="About me" click={toggleMode} mode={Mode} />
          <Alert alert={AlertBox} />
          <Switch>
            <Route path="/about">
              <About mode={Mode} />
            </Route>

            <Route path="/">
              <TextForm heading="please write something" mode={Mode} alert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
