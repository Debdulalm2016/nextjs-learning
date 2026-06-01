const customers = [
  {
    id: 'a001',
    name: 'Alice',
  },
  {
    id: 'a002',
    name: 'Bob',
  }
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  }
];