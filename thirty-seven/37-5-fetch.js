console.log(111111);
console.log(2222);
// setTimeout(() => console.log('aaaa'), 5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log(33333);
console.log(44444);
for (let i = 0; i < 10000; i++) {
    console.log(i);
    
}