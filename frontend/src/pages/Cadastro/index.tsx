import "react-datepicker/dist/react-datepicker.css";
import Card from "../../components/Card";
import './Cadastro.scss'
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DatePickerField } from "../../components/DatePickerField";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { toast } from "react-toastify";

interface SaleFormValues {
  sellerName: string,
  visited: number | undefined,
  deals: number | undefined,
  amount: number | undefined,
  date: Date | undefined
}

function CadastroDeVenda() {
  let initialValues: SaleFormValues = {
    sellerName: '',
    visited: 0,
    deals: 0,
    amount: 0,
    date: new Date()
  }
  const navigate = useNavigate()

  const submitForm = async (values: any, {resetForm}: any) => {
    try {
      await axios.post(`${BASE_URL}/sales`, values).then(resp => resp)
      toast.success("Venda cadastrada com sucesso!")
      resetForm({})
    } catch (error: any) {
      console.log("ERRO: ", error)
      toast.error("Erro ao salvar venda.")
    }
  }

  const validation = () => {
    // adicionar validação
  }

  return (
    <section className="secao">
      <Card>
        <div>
          <h1 className="register-title">Cadastro de Venda</h1>
          <Formik
            initialValues={initialValues}
            validate={validation}
            onSubmit={submitForm}
          >
            {({
              handleSubmit,
              isSubmitting,
              handleChange,
              values,
            }) => (

              <Form className="form-sales-record">
                <div className="row">
                  <div className="field">
                    <label htmlFor="sellerName">Vendedor</label>
                    <Field
                      type="text"
                      name="sellerName"
                      id="sellerName"
                      placeholder="Nome do vendedor"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="field date">
                    <label htmlFor="date">Data</label>
                    <DatePickerField name="date" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="visits">Visitas</label>
                  <Field
                    type="number"
                    name="visited"
                    id="visits"
                    placeholder="00"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="deals">Vendas</label>
                  <Field
                    type="number"
                    name="deals"
                    id="deals"
                    placeholder="00"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="amount">Total</label>
                  <Field
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="R$"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="btns">
                  <button type="button" onClick={() => navigate(-1)}>CANCELAR</button>
                  <button type="submit" disabled={isSubmitting}>
                    ADICIONAR
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          {/* <form className="form-sales-record" onSubmit={submitForm}>
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
          </form> */}
        </div>
      </Card>
    </section>
  );
}

export default CadastroDeVenda;