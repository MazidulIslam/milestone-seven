function doSomething() {
    console.log('I am coding JavaScript');
}
console.log('First : ami sobar age');
console.log('Second: ami second');
// setTimeout(doSomething, 5000);
setTimeout(function () {
    console.log('Checking set Time out using function and 5 sec');
},5000)
setTimeout(() => {
    console.log('Using arrow function set time out');
},4000)
console.log('Third: ami third');
console.log('Fourth: ami fourth');