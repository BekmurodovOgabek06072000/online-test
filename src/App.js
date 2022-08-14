import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlavniPage } from './GlavniPage';
import { WorkPage } from './WorkPage';
import { useState } from 'react';
function App() {
  const [Test,setTest]=useState([])
  const [Page, setPage]=useState(false)
  return (
    <>
      <Routes>
        <Route axact path='/' element={<GlavniPage setTest={setTest} setPage={setPage}/>} />
        <Route axact path='/quiz' element={<WorkPage Test={Test} Page={Page} setTest={setTest}/>} />

      </Routes>
    </>
  );
}

export default App;
