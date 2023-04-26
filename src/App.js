import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ss from './assets/scss/App.module.css'
import './assets/scss/Reset.module.css'
import Taskbar from './assets/components/Taskbar';
import Desktop from './assets/components/Desktop';
import Footer from './assets/components/Footer';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import About from './Pages/About';

function App() {

  // saving date and time in a state
  const [date, setDate] = useState();

  // constantly updating the state every 100ms to show the current time
  useEffect(() => {
    setInterval(() => {
      /*time in order to show the current time in the taskbar*/
      setDate(new Date().toLocaleDateString('en-US', {
        /* alternate order of date and time: 'timeStyle: 'short', dateStyle: 'short' */
        weekday: 'short',
        month: 'short',
        year: 'numeric',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
      }));
    }, 100);
  }, []);

  return (
    <div className={ss.App}>
      <Taskbar date={date} />
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about this" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
