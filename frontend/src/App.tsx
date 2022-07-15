import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CadastroDeVenda from "./pages/Cadastro"
import Vendas from "./pages/Vendas"
import {BsSun, BsMoon} from 'react-icons/bs'
import './theme/theme.scss'
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`container ${theme}`}>
      <ToastContainer />
      <Header />
      <div className="switcher">
        <BsMoon />
        <label className="toggler-wrapper style-15">
          <input type="checkbox" onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
          <div className="toggler-slider">
            <div className="toggler-knob"></div>
          </div>
        </label>
        <BsSun />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Vendas />} />
          <Route path="/cadastro" element={<CadastroDeVenda />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
