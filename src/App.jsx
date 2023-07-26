import React from 'react';
import MiddleContent from './components/middleContent/MiddleContent';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<MiddleContent />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route
            path="/education"
            element={
              <>
                <p>education</p>
              </>
            }
          ></Route>
          <Route path="/projects" element={<p>projects</p>}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
