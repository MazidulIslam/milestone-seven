"use strict";
// class Car{
//     constructor(model, price) {
//         this.model = model;
//         this.price = price;
//     }
// }
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 100000;
    }
    getActualMilage() {
        const realMilage = this._millage + 50000;
        return realMilage;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('alion', 1200000);
const totalPrice = toyota.getTotalPrice(12);
