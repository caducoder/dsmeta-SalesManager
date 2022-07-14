import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import CadastroDeVenda from "./pages/Cadastro"
import Vendas from "./pages/Vendas"

function App() {
  
  return (
    <>
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
