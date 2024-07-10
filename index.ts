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
// ===========type alias========
// type user = { name: string;
//     age1: number;
//     role: string;
//     class:{   /// type alias ma hum class bhi bna skty hn or functions bhi
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

// === sir ali session on interface/type alias / type intersection / object====
// simple object:
// let myObject = {
//     name: 'ali',
//     age: '28',
//     isStudent: true,
// }
// console.log(myObject.name);



//  basic method 
// let myObject:{    ////this is a type annotation
//     name: string,
//     age: number,
//     isStudent: boolean
// } = {
//     name: 'ali',
//     age: 28,
//     isStudent: true,
// }


// object ki values serate krney kly omma use hota while interface or type alias,type intersection ma semicolon; use hota h
// interface method
// interface Data {
//     name: string;
//     age: number;
//     isStudent: boolean;
//     semester: string;
//     studyContent(): string;  /// functions use in interface as 
//     myAge(personName:string):string
// } 
// const myData : Data = {
//     name: 'ali',
//     age: 28,
//     isStudent: true,
//     semester: '6th',
//     studyContent: function(){  // function use in object as this
//         return 'chemistry';
//     },
//     myAge: function(personName:string){
//         return 'age of '+ personName + this.age;
//     }
// }

// console.log(myData.name)
// console.log(myData.myAge('ali'));



// ==================== type alias ===========================
// type Department = {
//     department: string;
//     students: number;
//     teachers: number;
//     isLab: boolean
// }

// type Canteen = {
//     tables: number;
//     counters: number;
//     isMenu: boolean;
// }
// // =============== intersection (&) =====================

// type Sector = Department & Canteen &{
//     isCommonHall: boolean;
// }

// const university: Sector = {
//     department: 'IT',
//     students: 200,
//     teachers: 20,
//     isLab: true,
//     tables: 10,
//     counters: 2,
//     isMenu: true,
//     isCommonHall: false,
// }
// console.log(university);
// function myHistory(){
//     return `i studied in departemttn ${university.department}. 
//     the students in my depart are : ${university.students}`
// }
// console.log(myHistory());




// ==================== interface ===========================

// interface Car {
//     speedInKph: number;
//     model: string;
//     color: string;
// }
// // ==== merge =====
/////// == interface ma hum aik hi name k aik sy zyada interfaces bna skty hn
//==or interface ma ye automatically merge ho jaty hn unhyn merge krney kly ksi special method ki zarorat nhi prti
// such as type alias ma jysy intersecton k zarorat prti hn
// interface Car {
//     isAuto: boolean;
// }

// const myCar: Car = {
//     speedInKph: 100,
//     model: '2022',
//     color: 'white',
//     isAuto: true,
// }
// console.log(myCar);



// // =============== extend in interface ====================
// interface WallDim{
//     height: string;
//     thickness: string;
// }

// interface WallProps extends WallDim {
//     paint: string;
// }

// const myWall : WallProps = {
//     height: '12feet',
//     thickness: '9inch',
//     paint: 'white'
// }


interface Detail {
    name: string;
    age: number;
}


let user: Detail = {
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
}

let sphere  = {
    diameter: 20,
}

// ball = {
//     diameter: 30,
//     length: 10,
// }

let tube = {
    diameter: 30,
    length: 10
}
ball = tube;
console.log(ball)



// ================ Tuple ====================
// let newArray : string[] = ['ali',123]
let newArray : [string, number, string, boolean];
newArray = ['color',100,'heght',true]


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
import{add,sub,mul,div} from "./module.js"
add(5,8);
sub(9,5);
mul(9,4);
div(8,2)
// vercel p hum apni websites free ma host kryn gy / vercel p signup krna h or phr isko github k sath deploy krna h