// // Вариант 1
// let a = 13.123456789;
// let b = 2.123;
// let n = 5;

// // Вариант 2
// let a = 13.890123;
// let b = 2.891564;
// let n = 2;

// Вариант 3
let a = 13.890123;
let b = 2.891564;
let n = 3;


function get_fraction(number, precision) {
    let fraction = Math.floor((number - Math.floor(number)) * Math.pow(10,precision));
    return fraction;
}

let a_ = get_fraction(a, n);
let b_ = get_fraction(b, n);

console.log('a_ =', a_);
console.log('b_ =', b_);
console.log('a_ > b_', a_ > b_);
console.log('a_ < b_', a_ < b_);
console.log('a_ ≥ b_', a_ >= b_);
console.log('a_ ≤ b_', a_ <= b_);
console.log('a_ = b_', a_ === b_);
console.log('a_!= b_', a_ !== b_);