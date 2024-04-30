let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let shop = [
  { item: 1, price: 100 },
  { item: 2, price: 160 },
  { item: 3, price: 700 },
  { item: 4, price: 200 },
  { item: 5, price: 300 },
  { item: 6, price: 170 },
];
let red = shop.reduce((p, c) => {
  return p + c.price;
}, 0);

console.log(red);
