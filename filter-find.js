const numbers = [12,344,2,35,66,45, 56];

const bigNumbers = numbers.filter( x => x > 40 );
const smallNumbers = numbers.filter( x => x < 40 );

// console.log( bigNumbers );
// console.log( smallNumbers );

const products = [
    { name: 'water bottle', price: 5000, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 4000, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const productName = products.filter( x => x.price > 3000);
// console.log( productName );

const productName2 = products.filter( x => x.price == 3000);
// console.log( productName2 );
// here if i use find = 1 value ;
// and i use filter = maximum value 
const checkFinds = products.find ( x => x.color == 'black');
console.log( checkFinds);