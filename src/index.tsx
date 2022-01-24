import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models:{
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance',
          type: 'deposit',
          category: 'Dev',
          amount: 400,
          createdAT: new Date('2021-01-15 09:00:00'),
        },
        {
          id: 2,
          title: 'Pizzae',
          type: 'withdraw',
          category: 'Alimentação',
          amount: 100,
          createdAT: new Date('2022-01-18 21:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
     return this.schema.all('transaction');
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
