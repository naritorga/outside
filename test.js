const orders = [
  { id: "A1", amount: " 1,250 " },
  { id: "A2", amount: "980" },
  { id: "A3", amount: " 2,500 " },
  { id: "A4", amount: "1250" },
  { id: "A5", amount: "2,500" },
  { id: "A6", amount: "980" }
];

function getOrderAmountSummary(arr) {
  // 1) แปลง amount ให้เป็นตัวเลขเรียบร้อย
  const orderNorm = arr.map(item => ({
    id: item.id,
    amount: Number(item.amount.trim().replaceAll(",", ""))
  }));

  // 2) เตรียม array summary ว่าง ๆ
  const summary = [];

  // 3) วนลูป orderNorm ทีละตัว
  for (let order of orderNorm) {
    // 3.1) หาใน summary ว่ามี amount นี้หรือยัง
    let found = summary.find(item => item.amount === order.amount);

    if (found) {
      // 3.2) ถ้ามีแล้ว → เพิ่ม count
      found.count += 1;
    } else {
      // 3.3) ถ้ายังไม่มี → สร้าง object ใหม่
      summary.push({ amount: order.amount, count: 1 });
    }
  }

  return summary;
}

console.log(getOrderAmountSummary(orders));
