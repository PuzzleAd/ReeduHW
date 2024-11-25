//! დავალება 1
// 1

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -10];

// let qunatity = 0;

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > 0) qunatity++;
// }
// let sum2 = nums.reduce((acc, curr) => {
//   if (curr < 0) {
//     acc += curr;
//   }
//   return acc;
// }, 0);

// let arr = [];

// arr.push(qunatity);
// arr.push(sum2);

// console.log(arr);

//2

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const multipliedNums = nums.map((num) => num * 2);

// let count = 0;

// const DividedNums = multipliedNums.filter((num) => num % 3 === 0);

// console.log(DividedNums);

//3

// const arr = [19, 5, 42, 2, 77];

// const SortedArr = arr.sort((a, b) => a - b);

// let sum = SortedArr[0] + SortedArr[1];

// console.log(sum);

// 4

// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];

// const getLargeNumbers = (arr1, arr2) => {
//   const largeArr = [];
//   arr1;

//   for (let i = 0; i < arr1.length; i++) {}
// };
// აქ ვერ გავიგე რა რიცხვები უნდა ამომეკლო კონკრეტულად, ამ კონკრეტულ შემთხვევაზე გავაკეთებდი, მაგრამ სხვა შემთხვევებზე რო მომერგო ვერ გავიგე ამოცანის პრინციპი

// 5

// const characters = [
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     eye_color: "blue",
//     gender: "male",
//   },
//   {
//     name: "Darth Vader",
//     height: "202",
//     mass: "136",
//     eye_color: "yellow",
//     gender: "male",
//   },
//   {
//     name: "Leia Organa",
//     height: "150",
//     mass: "49",
//     eye_color: "brown",
//     gender: "female",
//   },
//   {
//     name: "Anakin Skywalker",
//     height: "188",
//     mass: "84",
//     eye_color: "blue",
//     gender: "male",
//   },
// ];

// const onlyName = characters.map((character) => character.name);

// console.log(onlyName);

// const firstNameArr = onlyName.map((name) => name.split(" ")[0]);

// console.log(firstNameArr);

// const onlyColor = characters.map((character) => character.eye_color);

// const eyeColor = onlyColor.reduce(
//   (acc, curr) => {
//     if (acc[curr] !== undefined) {
//       acc[curr]++;
//     }
//     return acc;
//   },
//   { blue: 0, brown: 0, yellow: 0 }
// );

// console.log(eyeColor);

// class bankAccount {
//   #balance = 0;

//   #getHistory = []

//   getHistory() {
//     return []
//   }

//   deposit(usd) {
//     this.#balance += usd;
//     this.#getHistory.time = new Date().toISOString();
//     this.#getHistory.type = "deposit";
//     this.#getHistory.amount = usd;
//     this.#getHistory.persondId = 0;
//     return this;
//   }

//   withdraw(usd) {
//     this.#balance - usd;
//     this.#getHistory.time = new Date().toISOString();
//     this.#getHistory.type = "withdraw";
//     this.#getHistory.amount = usd;
//     this.#getHistory.persondId = 0;
//     return this;
//   }

//   getBalance() {
//     console.log(this.#balance);
//   }

//   transferMoneyToSomeone(usd, privateCode) {
//     if (this.#balance >= usd) this.#balance -= usd;
//     else console.error("Cant transfer this Amount");

//     this.#getHistory.time = new Date().toISOString();
//     this.#getHistory.type = "Transfer";
//     this.#getHistory.amount = usd;
//     this.#getHistory.persondId = privateCode;

//     console.log("U trnasferred to " + privateCode);

//     return this;
//   }
// }

//! დავალება 2
//1

// class Car {
//   make = "Mercedes";
//   model = "G-Wagon";
//   year = 2023;

//   constructor(battery) {
//     this.battery = battery;
//   }

//   batteryLife() {
//     console.log(this.battery);
//   }
// }

//2

// class Library {
//   constructor() {
//     this.books = [];
//   }

//   addBook(author, book, year) {
//     obj = {
//       author: author,
//       book: book,
//       year: year,
//     };
//     this.books.push(Obj);
//   }

//   removeBook(book) {
//     this.books = this.books.filter((b) => b.book !== book);
//   }

//   listBooks() {
//     console.log(this.books);
//   }
// }

//3

// class Employee {
//   #salary = 0;

//   calculateSalary(hour, hRate) {
//     this.#salary = hRate * hour;
//     return this.#salary;
//   }
// }

//4

// class shoppingCart {
//   constructor() {
//     this.cart = [];
//   }

//   addItem(item, price) {
//     obj = {
//       item: item,
//       price: price,
//     };
//     this.cart.push(obj);
//   }

//   deleteItem(item) {
//     this.cart = this.cart.filter((product) => product.item !== item);
//   }

//   calculateTotal() {
//     console.log(this.cart.reduce((sum, product) => sum + product.price, 0));
//   }

//   listItems() {
//     console.log(this.cart);
//   }
// }

//5

// class carFactory {
//   constructor() {
//     this.cars = [];
//   }
//   addCar(year, model, price) {
//     obj = {
//       year: year,
//       model: model,
//       price: price,
//     };
//     this.cars.push(obj);
//   }
//   deleteCar(model, year) {
//     this.cars = this.cars.filter(
//       (car) => car.model !== model && car.year !== year
//     );
//   }
//   getAllCars() {
//     console.log(this.cars);
//   }

//   updateCar(model, year, newPrice) {
//     const car = this.cars.find(
//       (car) => car.model === model && car.year === year
//     );

//     if (car) {
//       car.price = newPrice;
//     } else {
//       console.log(`Not Found `);
//     }
//   }
// }

//! დავალება 3

//1

// let timeOut;

// const getMouseCoordinates = () => {
//   document.addEventListener("mousemove", (e) => {
//     clearTimeout(timeOut);

//     timeOut = setTimeout(() => {
//       console.log(
//         `Mouse stopped moving ong coordintes X:${e.clientX}, Y:${e.clienY}`
//       );
//     }, 200);
//   });
// };

// getMouseCoordinates();

//2

const getOurData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      const ourData = data.map((obj) => ({
        id: obj.id,
        name: obj.name,
        username: obj.username,
        email: obj.email,
      }));
      console.log(ourData);
    });
};
