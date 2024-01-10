import './App.css'
import Tekstas from './components/Tekstas';
import Pirkiniai from './components/Pirkiniai';
import Header from './components/Header';
import Paslaugos from './components/Paslaugos';
import Paslauga from './components/Paslauga';



function App() {
  return (
    <>
      <Header />
      <Tekstas />
      <Pirkiniai />
      <Paslaugos />
      <div className="paskutine-paslauga">
      <Paslauga />
      </div>
    </>
  )
}

export default App
