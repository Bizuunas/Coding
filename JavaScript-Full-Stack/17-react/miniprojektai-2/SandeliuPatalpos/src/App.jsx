import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import MainLayout from './Layouts/MainLayout';

import HomePage from './Pages/HomePage';
import Sandelys1 from './Pages/Sandelys1'
import Sandelys2 from './Pages/Sandelys2'
import AdminPatalpos from './Pages/AdminPatalpos'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/sandelys1" element={<Sandelys1 />} />
            <Route path="/sandelys2" element={<Sandelys2 />} />
            <Route path="/AdminPatalpos" element={<AdminPatalpos />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
