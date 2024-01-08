class Customer {
    orders = [];
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    addOrder(order){
        this.orders.push(order);
    }
}

class Order {

    Payment=null;
    OrderDetail=[];
    constructor(data, status){
        this.data = data;
        this.status =status;
    }

    calcSudTotal() {
        console.log(this.calcSudTotal);
    }
    calcTax() {
        console.log(this.calcTax);
    }
    calcTotal() {
        console.log(this.calcTotal);
    }
    calcTotaWeight() {
        console.log(this.calcTotaWeight);
    }
    addPayment(Payment){
        this.Payment = Payment
    }
    addOrderDetail(OrderDetail){
        this.OrderDetail.push(OrderDetail);
    }
}

class OrderDetail {
    item = null
    constructor(quantity, taxStatus) {
        this.quantity = quantity;
        this.taxStatus = taxStatus;
    }
    calcSudTotal() {
        console.log(this.calcSudTotal);
    }
    calcWeight() {
        console.log(this.calcWeight);
    }
    calcTax() {
        console.log(this.calcTax);
    }
    addItem(item) {
        this.item = item
    }
}

class Item {
  constructor(shippingWeight, description, price) {
    this.shippingWeight = shippingWeight;
    this.description = description;
    this.price = price;
  }
  getPriceFerQuantity() {
    console.log(this.getPriceFerQuantity);
  }
  getTax() {
    console.log(this.getTax);
  }
  inStock() {
    console.log(this.inStock);
  }
}

class Payment {
    constructor(amount){
        this.amount = amount
    }
}

class Cash extends Payment {
  constructor(amount, cashTendered) {
    super(amount);
    this.cashTendered = cashTendered;
  }
}

class Check extends Payment {
  constructor(amount, name, bankID) {
    super(amount);
    this.name = name;
    this.bankID = bankID;
  }
  authorized() {
    console.log(this.authorized);
  }
}

class Credit extends Payment {
  constructor(amount, number, type, expDate) {
    super(amount);
    this.number = number;
    this.type = type;
    this.expDate = expDate;
  }
  authorized() {
    console.log(this.authorized);
  }
}

const main = () => {
  let customer1 = new Customer("Burit Srisawan","Burit");
  //console.log(customer1);
  //Product Items
  const item1 = new Item(0.3, "ออลอินวันบักเก็ต",299);
  const item2 = new Item(0.1, "เดอะบอกซ์ป๊อบบอมบ์แซ่บ",169);
  const item3 = new Item(0.1, "ป๊อบบอมบ์แซ่บ",45);
  const item4 = new Item(0.3, "พอใจ บักเก็ต",209);
  const item5 = new Item(0.1, "ชิคแอนด์แชร์ ทีมนักเก็ตส์ป๊อป",109);

  //create Order
  const order1 = new Order("08/01/2567","In process");
  const order2 = new Order("08/01/2567","In process");
  //add order to a customer
  customer1.addOrder(order1);
  customer1.addOrder(order2);
  //create order detail
  const orderDetail1 = new OrderDetail (5, "tex included");
  orderDetail1.addItem(item2);
  const orderDetail2 = new OrderDetail (2, "tex included");
  orderDetail2.addItem(item5);

  //add order detail to an order
  order1.addOrderDetail(orderDetail1);
  order1.addOrderDetail(orderDetail1);
  //console.log(orderDetail1)
  console.log("ชื่อ : " + customer1.name);
  console.log("จำนวนการสั้งซื้อ : " + customer1.orders.length);
  for (let i = 0; i < customer1.orders.length; i++){
    console.log("คำสั่งซื้อที่ : "+ (i+1));
    let total = 0
    //console.log(customer1.orders[i].orderDetails);
    for (let k = 0; k < customer1.orders[i].orderDetails.length; k++) {
      const item = customer1.orders[i].orderDetails[k].item;
      const quantity = customer1.orders[i].orderDetails[k].quantity;
      const subTotal = quantity * item.price;
      total += subTotal;
      console.log("ลำดับที่ " + (k + 1) + " " + item.description + " จำนวน " + quantity + " รายการ " + " ราคา " + subTotal + " บาท ");
    }
    console.log("รวมทั้งหมด " + total + " บาท");
  }
};

main();