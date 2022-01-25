import { useTransactions } from '../../hooks/useTransactions';
import { Container } from "./styles";

import trashImg from '../../assets/trash.svg';
import { api } from '../../services/api';


export function TransactionsTable() {
    const {transactions} = useTransactions();  
        
   async function handleDelete(title: string) {
        const newTransaction =  transactions.filter((item) => item.title !== title)
              
        return console.log(newTransaction);
      };

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
                    {transactions.map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td className={item.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style:'currency',
                                    currency:'BRL'
                                }).format(item.amount)}
                             </td>
                            <td>{item.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(item.createdAT)
                                )}
                            </td>
                            <td>
                                <button type="button" style={{ 
                                    background: '#FFF',
                                    border: 0
                                    }} onClick={() => handleDelete(item.title)}>
                                    <img src={trashImg} alt="Excluir" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}