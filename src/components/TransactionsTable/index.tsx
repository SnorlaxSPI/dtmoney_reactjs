import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionsTable() {
  useEffect(() => {
    api.get('http://localhost:5173/api/transactions')
    .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>03/05/2023</td>
          </tr>
          
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>01/05/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}