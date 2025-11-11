
type OrderStatus = 'PENDING' | 'PAID' | 'CANCELLED'

interface Order {
  id: string
  amount: number
  status: OrderStatus
}

let orders: Order[] = [
  { id: '1', amount: 1000, status: 'PENDING' },
  { id: '2', amount: 2000, status: 'PAID' },
  { id: '3', amount: 3000, status: 'PENDING' },
  { id: '4', amount: 4000, status: 'PAID' },
  { id: '5', amount: 5000, status: 'CANCELLED' }
]

function updateOrderStatus(orders: Order[], id: string, newStatus: OrderStatus): Order[] {
  return orders.map(value => {
    if (value.id === id) {
      return { id: value.id, amount: value.amount, status: newStatus }
    } else {
      return { id: value.id, amount: value.amount, status: value.status }
    }
  })
}

let results = updateOrderStatus(orders, '2', 'CANCELLED')
console.log(JSON.stringify(orders))
console.log(JSON.stringify(results))
