import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import MainLayout from './layouts/MainLayout.jsx';

import NaujasPac from './pages/NaujasPac.jsx';
import PacientuSar from './pages/PacientuSar.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/pacientu-sar" element={<PacientuSar />} />
          <Route path="/naujas-pac" element={<NaujasPac />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
