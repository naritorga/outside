const orders = [
  { orderId: "O-101", status: "PAID", items: [
      { qty: "2",   unitPrice: " 12 " },
      { qty: 1,     unitPrice: "20.50" },
    ]},

  { orderId: "O-102", status: " paid ", items: [
      { qty: " 1 ", unitPrice: " 1,250 " },
      { qty: "1",   unitPrice: "free" },
    ]},

  { orderId: "O-103", status: "CANCELLED", items: [
      { qty: 0,     unitPrice: "35" },
      { qty: "2",   unitPrice: 15 },
    ]},

  { orderId: "O-104", status: "PAID", items: null },
];

function processPaidOrders(orders) {
  let ordersNorm = orders.filter((data) => data.status.trim().toLowerCase() === "paid")
                         .map((data) => ({orderId: data.orderId, }))
  

  return ordersNorm
}


console.log(processPaidOrders(orders));
