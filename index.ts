#! /usr/bin/env node
import inquirer from "inquirer";
// today topic is object:

// let user1: {
//     name: string,
//     age1: number,
//     role: string
// } =  {
//     name: "zakia",
//     age1: 1 ,
//     role: 'mother'
// }
// console.log(user1.age1);
// type alias
// type user = { name: string;
//     age1: number;
//     role: string;
//     class:{
//         name: string;
//         rollno: number;
//     }
// }
// // let user1:  user = {
    
// //     name: "zakia",
// //     age1: 1 ,
// //     role: "mother",
// //     class: { // nested object
// //         name: "zimal",
// // rollno: 234,
// //     },
// // }
// // console.log(user1.age1);
// // console.log(user1.role);
// // console.log(user1.cla
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


let arr = [1, 2, 3];

console.log(arr.indexOf(4));

let array = [];
array.push("green","yellow");
console.log(array[array.length-2]);