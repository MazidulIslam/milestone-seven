// const myNumber = 5;
// const myName = 'Mazid';
// console.log('Hello TypeScript', myNumber, myName);

let money: number = 300;
let myName: string = 'mazid';
const funny: boolean = true;
// function add(first: number, second: number): number {
//     const result = first + second;
//     return result;
// }
// const output:number = add(10, 20);

// function add(first: number | string, second: number | string): number | string{
    // const result: string | number = first + second;
    // return result;
// }
// const output:number | string = add('adam', 'sandler');

// const student: {name:string,age:number,salary:number} = {
//     name: 'kamal',
//     age: 23,
//     salary: 23333
// }
type person = {
    name: string,
    age: number,
    salary:number
}
const student: person = {
    name: 'kamal',
    age: 23,
    salary: 23333
}

// regular function 
function add3(num1: number, num2: number): number{
    return num1 + num2
}
// arrow function 
const add4 = (num1: number, num2: number): number => num1 + num2;

const add5 = (num3: number, num4: number): void => {
    num3 + num4
};
