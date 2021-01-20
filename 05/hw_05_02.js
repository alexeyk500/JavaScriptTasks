// Напишите функцию, которая вычисляет и возвращает стоимость корзины товаров
// после применения всех скидок. В качестве аргументов функция принимает 3 параметра:

// Общая сумма корзины
// Количество товаров в корзине
// Промокод (по умолчанию null)

// Правила и порядок (порядок важен!) начисления скидок:

// Если промокод равен 'ДАРИМ300', то из суммы вычитается 300 рублей.
// При этом если сумма меньше 300 рублей, то итоговая стоимость будет 0.
// При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме
// При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения
// (то есть к разнице суммы корзины и 50 000)
// Если промокод равен 'СКИДКА15', то ко всей сумме применяется скидка 15%,
// но только если сумма ≥20 000
// Каждая следующая скидка должна проверяться и применяться к сумме после применения предыдущих скидок.

function apply_discount (summCart, numberOfItems, promoCode) {
  discountedSumm = summCart;

  // Если промокод равен 'ДАРИМ300', то из суммы вычитается 300 рублей.
  // При этом если сумма меньше 300 рублей, то итоговая стоимость будет 0.
  if (promoCode === 'ДАРИМ300') {
    discountedSumm -= 300;
    if (discountedSumm < 0) {
      discountedSumm = 0;
      return discountedSumm;
    }
  }

  // При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме
  if (numberOfItems >= 10) {
    discountedSumm *= 0.95
  }

  // При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения
  // (то есть к разнице суммы корзины и 50 000)
  if (discountedSumm > 50000) {
    discountedSumm -= (discountedSumm-50000)*0.2
  }

  // Если промокод равен 'СКИДКА15', то ко всей сумме применяется скидка 15%,
  // но только если сумма ≥20 000
  if ((promoCode === 'СКИДКА15') && (discountedSumm >= 20000)) {
    discountedSumm *= 0.85
  }

  return discountedSumm
}

console.log('Если промокод равен "ДАРИМ300", то из суммы вычитается 300 рублей.');
summCart=1000.0;
numberOfItems=5;
promoCode='ДАРИМ300';
console.log('Сумма корзины    =', summCart, 'Товаров в корзине =', numberOfItems, 'Промокод =', promoCode)
console.log('Сумма со скидкой =', apply_discount (summCart, numberOfItems, promoCode))
console.log('');

console.log('Если промокод равен "ДАРИМ300", то из суммы вычитается 300 рублей.');
console.log('При этом если сумма меньше 300 рублей, то итоговая стоимость будет 0..');
summCart=250.0;
numberOfItems=5;
promoCode='ДАРИМ300';
console.log('Сумма корзины    =', summCart, 'Товаров в корзине =', numberOfItems, 'Промокод =', promoCode)
console.log('Сумма со скидкой =', apply_discount (summCart, numberOfItems, promoCode))
console.log('');

console.log('При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме.');
summCart=1000.0;
numberOfItems=15;
promoCode=null;
console.log('Сумма корзины    =', summCart, 'Товаров в корзине =', numberOfItems, 'Промокод =', promoCode)
console.log('Сумма со скидкой =', apply_discount (summCart, numberOfItems, promoCode))
console.log('');

console.log('При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения');
console.log('(то есть к разнице суммы корзины и 50 000)');
summCart=100000.0;
numberOfItems=5;
promoCode=null;
console.log('Сумма корзины    =', summCart, 'Товаров в корзине =', numberOfItems, 'Промокод =', promoCode)
console.log('Сумма со скидкой =', apply_discount (summCart, numberOfItems, promoCode))
console.log('');

console.log('Если промокод равен "СКИДКА15", то ко всей сумме применяется скидка 15%,');
console.log('но только если сумма ≥20 000');
summCart=20000.0;
numberOfItems=5;
promoCode='СКИДКА15';
console.log('Сумма корзины    =', summCart, 'Товаров в корзине =', numberOfItems, 'Промокод =', promoCode)
console.log('Сумма со скидкой =', apply_discount (summCart, numberOfItems, promoCode))
console.log('');

console.log('При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме.');
console.log('При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения');
console.log('Если промокод равен "СКИДКА15", то ко всей сумме применяется скидка 15%,');
summCart=100000.0;
numberOfItems=25;
promoCode='СКИДКА15';
console.log('Сумма корзины    =', summCart, 'Товаров в корзине =', numberOfItems, 'Промокод =', promoCode)
console.log('Сумма со скидкой =', apply_discount (summCart, numberOfItems, promoCode))
console.log('');

// 100000 * 0.95 = 95000
// 95000 - (950000-50000)*0.2 = 86000
// 86000 * 0.85 = 73100

// НЕ ВЫПОЛНЯЛОСЬ - т.к. нет в лекциях
// В конце файла с кодом домашнего задания напишите конструкцию export default {название функции},
// чтобы была возможность автоматической проверки получившейся функции.
// export default {array_difference};
