import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ss from './assets/scss/App.module.css'
import './assets/scss/Reset.module.css'
import Taskbar from './assets/components/Taskbar';
import Desktop from './assets/components/Desktop';
import Footer from './assets/components/Footer';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';

function App() {

  // saving date and time in a state
  const [date, setDate] = useState();

  // constantly updating the state every 100ms to show the current time
  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleDateString('es-ES', { weekday: 'short', month: 'short', day: 'numeric' }) + " " + new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }));
    }, 100);
  }, []);

  return (
    <div className={ss.App}>
      <Taskbar date={date} />
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
