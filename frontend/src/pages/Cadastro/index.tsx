import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Card from "../../components/Card";
import './Cadastro.scss'
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function CadastroDeVenda() {
  const [data, setData] = useState(new Date());
  const navigate = useNavigate()

  const submitForm = (e: FormEvent) => {
    e.preventDefault()
    console.log('submeteu')
  }

  return (
    <section className="secao">
      <Card>
        <div>
          <h1 className="register-title">Cadastro de Venda</h1>
          <form className="form-sales-record" onSubmit={submitForm}>
            <div className="row">
              <div className="field">
                <label htmlFor="seller">Vendedor</label>
                <input
                  type="text"
                  name=""
                  id="seller"
                  placeholder="Nome do vendedor"
                />
              </div>
              <div className="field date">
                <label htmlFor="date">Data</label>
                <DatePicker
                  selected={data}
                  onChange={(date: Date) => setData(date)}
                  dateFormat="dd/MM/yyyy"
                  id="date"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="visits">Visitas</label>
              <input
                type="number"
                name=""
                id="visits"
                placeholder="00"
              />
            </div>
            <div className="field">
              <label htmlFor="sales">Vendas</label>
              <input
                type="number"
                name=""
                id="sales"
                placeholder="00"
              />
            </div>
            <div className="field">
              <label htmlFor="total">Total</label>
              <input
                type="text"
                name=""
                id="total"
                placeholder="0000,00"
              />
            </div>
            <div className="btns">
              <button type="button" onClick={() => navigate(-1)}>Cancelar</button>
              <input className="submit-button" type="submit" value="Adicionar Venda" />

            </div>
          </form>
        </div>
      </Card>
    </section>
  );
}

export default CadastroDeVenda;