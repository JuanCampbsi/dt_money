import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";

interface TransactiocnProps {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAT: string;
}

export function TransactionsTable() {
    const [transaction, setTransaction] = useState<TransactiocnProps[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransaction(response.data.transactions))
    }, [])

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
                    {transaction.map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td className={item.type}>{item.amount}</td>
                            <td>{item.category}</td>
                            <td>{item.createdAT}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}