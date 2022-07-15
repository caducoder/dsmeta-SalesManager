import { useState, useEffect } from "react";
import NotificationButton from "../NotificationButton";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import './SalesCard.scss'
import { Link } from "react-router-dom";
import Card from "../Card";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { Sale } from "../../models/sale";


function SalesCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const [dmin, setDmin] = useState(min);
  const [dmax, setDmax] = useState(new Date);
  const [sales, setSales] = useState<Sale[]>([]);

  const handleClick = (id: number) => {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(resp => console.log("SUCESSO"))
  }

  useEffect(() => {
    const minDate = dmin.toISOString().slice(0, 10)
    const maxDate = dmax.toISOString().slice(0, 10)

    const paramsString = new URLSearchParams({
      minDate,
      maxDate
    })

    // console.log(paramsString.toString());    

    axios.get(`${BASE_URL}/sales?${paramsString}`)
      .then((resp: any) => setSales(resp.data.content))

  }, [dmin, dmax]);

  return (
    <Card>
      <div>
        <h2 className="dsmeta-sales-title">Vendas</h2>
        <div className="input-button">
          <div>
            <div className="dsmeta-form-control-container">
              <DatePicker
                selected={dmin}
                onChange={(date: Date) => setDmin(date)}
                className="dsmeta-form-control"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="dsmeta-form-control-container">
              <DatePicker
                selected={dmax}
                onChange={(date: Date) => setDmax(date)}
                className="dsmeta-form-control"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
          <Link to='/cadastro'>
            Cadastrar
          </Link>
        </div>

        <div>
          <table className="dsmeta-sales-table">
            <thead>
              <tr>
                <th className="show992">ID</th>
                <th className="show576">Data</th>
                <th>Vendedor</th>
                <th className="show992">Visitas</th>
                <th className="show992">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
              </tr>
            </thead>
            <tbody>
              {
                sales.map(sale => {
                  return (
                    <tr key={sale.id}>
                      <td className="show992">#{sale.id}</td>
                      <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                      <td>{sale.sellerName}</td>
                      <td className="show992">{sale.visited}</td>
                      <td className="show992">{sale.deals}</td>
                      <td>R$ {sale.amount.toFixed(2)}</td>
                      <td>
                        <div className="dsmeta-red-btn-container">
                          <NotificationButton onClick={() => handleClick(sale.id)}/>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }

            </tbody>

          </table>
        </div>
      </div>
    </Card>
  );
}

export default SalesCard;