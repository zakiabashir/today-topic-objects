#! /usr/bin/env node
let user = {
    name: "Alice",
    age: 25
};
let oldUserReference = user;
// console.log(oldUserReference.age); // Outputs 25, which is stale data
user.age = 26;
console.log(user);
console.log(oldUserReference);
// // If we update the user object again
// user.age = 27;
// console.log(user.age); // Outputs 27
// console.log(oldUserReference.age); // Still outputs 25, which is stale data
let ball = {
    diameter: 10,
};
let sphere = {
    diameter: 20,
};
// ball = {
//     diameter: 30,
//     length: 10,
// }
let tube = {
    diameter: 30,
    length: 10
};
ball = tube;
console.log(ball);
// ================ Tuple ====================
// let newArray : string[] = ['ali',123]
let newArray;
newArray = ['color', 100, 'heght', true];
// //  template type literal: 
// // agr nma khta hon kh srf 3 colors aloow kry isky ilawa or koi nhi
// // isko specific krny kly hum literal types use krty hn:
// // such as string ki jagan hum colors ko define kryn gy 
// // agr hum aik hi variables ma aik sy zyada types define krna chty hn to uskly hum union | use kryn gy
// // such as:
// let trafficlight:"red" | "yellow" |"green" = "red";
// // agr hum aik sy zyada data types use krna chty hn to hum union | ka sign use krty hn
// // hum is ma aik sy zyada data types bhi istamal kr skty hn or object bhi
// let dinksize : "small" | "medium" | "large" 
// dinksize = "small" ;
// dinksize = "medium" ;
// dinksize = "large";
// // type intersection:
// type student = {
//     name: string;
//     rollnumber: number;
// };
// type teacher = {
//     name: string;
//     exp: number;
// }
// let std1 : student = {
//     name: "zakia",
//     rollnumber: 345,
// };
// let teacher1 : teacher ={
//     name: "hamzah",
//     exp: 6,
// };
//  let both: teacher & student = { //agr hum 2 types ki sari qualities aik hi variable ma likhna chty hn to hum esy variable bnyn gy
//     name:" zakia ",
//     rollnumber: 567,
//     exp: 10,
//  };
//  console.log(both);
//  console.log(std1);
//  console.log(teacher1);
//  let countries: "pakistan"| "india" | "turkey" | "iran"  = "india";
// let arr = [1, 2, 3];
// console.log(arr.indexOf(4));
// let array = [];
// array.push("green","yellow");
// console.log(array[array.length-2]);
import { add, sub, mul, div } from "./module.js";
add(5, 8);
sub(9, 5);
mul(9, 4);
div(8, 2);
// vercel p hum apni websites free ma host kryn gy / vercel p signup krna h or phr isko github k sath deploy krna h
