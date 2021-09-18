// class Car{
//     constructor(model, price) {
//         this.model = model;
//         this.price = price;
//     }
// }
class Car{
    model: string;
    price: number;
    private _millage: number;
    constructor(model:string, price:number) {
        this.model = model;
        this.price = price;
        this._millage = 100000;
    }
    getActualMilage(): number{
        const realMilage = this._millage + 50000;
        return realMilage;
    }
    getTotalPrice(tax: number): number{
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('alion', 1200000);
const totalPrice:number = toyota.getTotalPrice(12);