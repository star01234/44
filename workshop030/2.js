class Customer {
    orders = [];
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    addOrder(order){
        this.orders.push(order);
    }
}

class Order {
    payment = null;
    orderDetails = [];
    constructor(date, status) {
        this.date = date;
        this.status = status;
    }
    calcSubTotal() {
        console.log("Calculating Subtotal");
    }
    calcTax() {
        console.log("Calculating Tax");
    }
    calcTotal() {
        console.log("Calculating Total");
    }
    calcTotalWeight() {
        console.log("Calculating Total Weight");
    }
    addPayment(payment) {
        this.payment = payment;
    }
    addOrderDetail(orderDetail) {
        this.orderDetails.push(orderDetail);
    }
}

class OrderDetail {
        item = null;
    constructor(quantity, taxStatus) {
        this.quantity = quantity;
        this.taxStatus = taxStatus;
    }
    calcSubTotal() {
        console.log("Calculating Order Detail Subtotal");
    }
    calcWeight() {
        console.log("Calculating Order Detail Weight");
    }
    calcTax() {
        console.log("Calculating Order Detail Tax");
    }
    addItem(item) {
        this.item = item;
    }
}

class Item {
    constructor(shippingWeight, description, price) {
        this.shippingWeight = shippingWeight;
        this.description = description;
        this.price = price;
    }
    getPriceForQuantity() {
        console.log("Getting Price for Quantity");
    }
    getTax() {
        console.log("Getting Tax");
    }
    inStock() {
        console.log("Checking In Stock");
    }
}

class Payment {
    constructor(amount) {
        this.amount = amount;
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
    authorized(){
        console.log("Authorizing Check")
    }
}

class Credit extends Payment {
    constructor(amount, number, type, expDate) {
        super(amount);
        this.number = number;
        this.type = type;
        this.expDate = expDate;
    }
    authorized(){
        console.log("Authorizing Credit Card")
    }
}



const main = () =>{
    let customer1 = new Customer("Worachet Uttha", "Nakhon Pathom");
    
    //console.log(customer1);
    //Product
    const item1 = new Item(0.3, "ออลอินวันบักเก็ต", 299);
    const item2 = new Item(0.1, "ป๊อบบอมบ์แซ่บ", 39);
    const item3 = new Item(0.2, "เดอะบอกซ์ ออลสตาร์", 159);
    const item4 = new Item(0.2, "ชิคแอนด์แชร์ ทีมนักเก็ตส์ป๊อป", 159);
    const item5 = new Item(0.4, "คอมโบข้าวไก่กรอบแกงเขียวหวาน เคเอฟซี", 89);

    //create orders
    const order1 = new Order("08/01/2567", "In process");
    const order2 = new Order("09/01/2567", "In process");

    //add orders to a customer
    customer1.addOrder(order1)
    customer1.addOrder(order2)

    //create order detail
    const orderDetail1 = new OrderDetail(5, "tax included");
    orderDetail1.addItem(item2);
    const orderDetail2 = new OrderDetail(2, "tax included");
    orderDetail2.addItem(item5);
    const orderDetail3 = new OrderDetail(3, "tax included");
    orderDetail3.addItem(item1);
    const orderDetail4 = new OrderDetail(4, "tax included");
    orderDetail4.addItem(item4);

    //add order detail to an order
    order1.addOrderDetail(orderDetail1)
    order1.addOrderDetail(orderDetail2)
    order2.addOrderDetail(orderDetail3)
    order2.addOrderDetail(orderDetail4)

    //console.log(orderDetail1);
    console.log("ชื่อ : " + customer1.name);
    console.log("จำนวนคำสั่งซื้อ : " + customer1.orders.length);
    for (let i = 0; i < customer1.orders.length; i++) {
        console.log("คำสั่งซื้อที่ : " + (i + 1));
        let total = 0; 
        for (let k = 0; k < customer1.orders[i].orderDetails.length; k++) {
            const item = customer1.orders[i].orderDetails[k].item;
            const quantity = customer1.orders[i].orderDetails[k].quantity;
            const Subtotal = quantity * item.price;
            total += Subtotal;
            console.log("ลำดับที่ : " + (k + 1) + " " + item.description + " จำนวน " + quantity + " รายการ" + " ราคา " + Subtotal + " บาท");
        }
        console.log("รวมทั้งหมด: " + total + " บาท");
    }

}

main();
