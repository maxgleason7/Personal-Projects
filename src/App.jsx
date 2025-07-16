import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const pages = {
  Home: <Home />,
  About: <About />,
  Projects: <Projects />,
  Resume: <Resume />,
  Contact: <Contact />
};

export default function App() {
  const [current, setCurrent] = useState('Home');
  return (
    <div className="app-container">
      <Sidebar current={current} setCurrent={setCurrent} />
      <main className="main-content">
        {pages[current]}
      </main>
    </div>
  );
}
