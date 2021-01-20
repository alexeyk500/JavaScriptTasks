// // Вариант 1
// let n = 0;
// let m = 100;

// // Вариант 2
// let n = 2;
// let m = 5;

// // Вариант 3
// let n = 100;
// let m = -5;

// Вариант 4
let n = -3;
let m = -10;

let diap = Math.abs(m - n);
let min  = Math.min(n, m);

let rnd = Math.random()* diap + min;
console.log(rnd);

if (Math.floor(rnd) % 2 != 0) {
    rnd = Math.floor(rnd)
} else {
    rnd = Math.ceil(rnd)
}

console.log(rnd);