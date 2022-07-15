import { useState, useEffect } from "react";
import NotificationButton from "../NotificationButton";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import './SalesCard.scss'
import { Link } from "react-router-dom";
import Card from "../Card";
import axios from "axios";

interface IVenda {

}

function SalesCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(new Date);

  useEffect(() => {
    axios.get(`http://localhost:8080/sales`)
      .then((resp: any) => console.log(resp.data))
      
  }, []);

  return (
    <Card>
      <div>
        <h2 className="dsmeta-sales-title">Vendas</h2>
        <div className="input-button">
          <div>
            <div className="dsmeta-form-control-container">
              <DatePicker
                selected={minDate}
                onChange={(date: Date) => setMinDate(date)}
                className="dsmeta-form-control"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="dsmeta-form-control-container">
              <DatePicker
                selected={maxDate}
                onChange={(date: Date) => setMaxDate(date)}
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
              <tr>
                <td className="show992">#341</td>
                <td className="show576">08/07/2022</td>
                <td>Anakin</td>
                <td className="show992">15</td>
                <td className="show992">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="dsmeta-red-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show992">#341</td>
                <td className="show576">08/07/2022</td>
                <td>Anakin</td>
                <td className="show992">15</td>
                <td className="show992">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="dsmeta-red-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show992">#341</td>
                <td className="show576">08/07/2022</td>
                <td>Anakin</td>
                <td className="show992">15</td>
                <td className="show992">11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className="dsmeta-red-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </Card>
  );
}

export default SalesCard;