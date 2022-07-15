import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CadastroDeVenda from "./pages/Cadastro"
import Vendas from "./pages/Vendas"

function App() {
  
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Vendas />} />
          <Route path="/cadastro" element={<CadastroDeVenda />} />
        </Routes>
      </main>
    </>
  )
}

export default App
