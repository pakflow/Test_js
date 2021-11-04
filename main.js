// let cars = [
//     {
//         car: 'BMW',
//         count: 10
//     },
//     {
//         car: 'Toyota',
//         count: 12,
//     },
//     {
//         car: 'Lada',
//         count: 25,
//     },
//     {
//         car: 'Lexus',
//         count: 16, 
//     },
// ];
// let newCars = cars.forEach((item, index, arr) => {
//     console.log('Item', item)
//     return item
// })

// let 



// let nums = [1, 8, 10, 66, 100];
// let newNums = nums.map((item) => {
//     return Math.pow(item, 2)
// });
// console.log(nums);
// console.log(newNums);


// let nums = [1, 8, 10, 66, 100, -100, -190];
// let positiveNums = nums.filter((item) => item > 0)
// console.log(positiveNums)


//INCLUDES

// let nums = [1, 8, 10, 66, 100, -100, 8, -190];
// let checkNum = nums.includes(67);
// console.log(checkNum);

// let index = nums.indexOf(8);
// console.log(index);

// let index = nums.lastIndexOf(8);
// console.log(index);

// let elem = nums.find((item) => item != 10);
// console.log(elem);

// let index = nums.findIndex((item) => item == 10);
// console.log(index);

//Array.isArray
// console.log(Array.isArray([]));
// console.log(Array.isArray({}));

//REDUCE

// let nums = [1, 8, 10, 66, 100, -100, 8, -190];
// let result = nums.reduce((a, b) => a + b);
// console.log(result);

// EVERY

// let nums = [1, 10, 91, 100, 199, -986];
// let every = nums.every((item) => item < 0);
// console.log(every);
// let some = nums.some((item) => item > 0);
// console.log(some);

// REVERSE

// let nums = [1, 10, 91, 100, 199, -986];
// console.log(nums.reverse());

// Entries Keys Values - методы которые из объекта (могут из самого объекта, из ключей или из значений) сделать массив
// let obj = {
//     name = 'J&S',
// }

// let entries = Object.entries(obj);
// console.log(entries);

//Filter - перебирает массив и возвращает те элементы которые подходят по условию в новый массив
// reduce - перебирает массив и может в себе хранить предыдущее значение

// let arr = ['sam', 'luck', 'james'];
// let result = arr;