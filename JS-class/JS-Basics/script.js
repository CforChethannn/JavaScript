// // function revString(s1){
// //     let j=0
// //     let r='';
// //     for(let i=s1.length-1;i>-1;i--){
// //         r += s1[i];
// //     }
// //     return r;
// // }

// // var s = 'chethan'
// // const revString = (s1) => 
// //     {
// //         return s1.split('').reverse().join('')
    
// //     };

// // var k = revString(s)
// // console.log(k)

// // array 

// // var a = ['chethu', 21, 'male' ];
// // console.log(a);

// // a.push('s');
// // console.log(a);

// // a.unshift('G P');
// // console.log(a);

// // a.pop();
// // console.log(a);

// // a.shift();
// // console.log(a);


// // var b = [10,20,30,40,50,100];
// // console.log(b);
// // b.splice(2,2)
// // console.log(b);

// // b.splice(1,0,88,33,44);
// // console.log(b);

// // console.log(b.sort((a,b)=>a-b))
// // console.log(a.sort())
// // console.log(a.reverse());
// // for(let k in a){
// //     console.log(a[k]);
// // }

// // var ar = [10,20,30,40,50,60]
// // var ar2 = [202,200];
// // var ar3 = [90,98];

// // console.log(ar.slice(1,3));

// // brr = ar.concat(ar3,ar2);
// // console.log(brr)

// // console.log(brr.includes(100));

// // ar.forEach(function(n) {
// //     console.log(n);
// // });

// // ar.forEach( n => {
// //     console.log(n);
// // });

// // var kk = [];
// // ar.forEach( n => {
// //     kk.push(n);
// //     // console.log(n);
// // });

// // console.log(kk);

// // var arr = 'Sheriyan Coding School';


// // var arr2 = arr.split(' ');
// // // console.log(arr2);

// // midrev = arr2[1].split('').reverse().join('');
// // // console.log(midrev);

// // arr2.splice(1,1,midrev);
// // arr = arr2.join(' ');

// // console.log(arr2);
// // console.log(arr);


// // let a = [10,20,30,40,50]

// // var sum = 0;
// // a.forEach(function(el,i){
// //     sum+=el;
// // });
// // console.log(sum);

// // var b = a.map(function(n){
// //     return n*n;
// // });

// // var sq = (n) => {
// //     return n*n;
// // }
// // var k;
// // var b = a.map((n) =>{
// //    k =  sq(n);
// //    return k;
// // });

// // var b = a.map(function (n){
// //     return sq(n)
// // });


// // var c = a.map(function(ele, ind){
// //     return (ind+1)*ele;
// // });

// // var c = a.map( (ele,ind) =>{
// //     return(ele*(ind+1))
// // });

// // function elxind (ele,ind){
// //     return(ele*(ind+1));
// // }

// // var c = a.map(elxind);
// // console.log(c);

// // ----------filter--------

// //  var arr = [-10,-20,30,40,-50]

// // var c = arr.map(function(n){
// //     // if(!(n>-1))
// //     //     return n;
// // })
 
// // var b = arr.filter(function(n){
// //     if(!(n>-1))
// //         return n;
// // })

// // console.log(c)

// // var d = arr.map((Element,ind) => {
    
// // });

// // arr.forEach(function(n,i){
// //     console.log(i," -> ",n);
// // });

// // function pos(n){
// //     if(n>-1)
// //         return n;
// //     else
// //         return n*-1;
// // }
// // var d = arr.map(pos);
// // console.log(d);

// // var e = arr.filter((n) => {
// //     if (n>-1)
// //         return n;
// // });
// // console.log(e);



// // reduce---------------------------------

// var arr = [12,99,46,76,5]

// // var tot = arr.reduce((sum,val)=>{
// //     return (sum+val);
    
// // },0);
// // console.log(tot);

// // var big = arr.reduce((max,val)=>{
// //     if(max>val)
// //         return max;
// //     return val;
// // });
// // console.log(big);

// // -------------Objects-----------------


// // var person = {
// //     name : 'chethan',
// //     age : 21,
// //     city : 'Mysore',
// //     greet : function(){
// //         console.log("Hello user...");
        
// //     },
// //     skills : ['HTML', 'CSS', 'JS'],
// //     family : {
// //         'father' : 'puttu',
// //         'mother' : 'hema',
// //         'brother' : 'yashu'
// //      }

// // };

// // console.log(person.greet())

// // person.gender = 'male';
// // Object.seal(person);
// // delete person.gender;
// // console.log(Object.keys(person));

// // var {age,...b} = person;
// // console.log(b)

// // var copy = person;
// // copy.skills[3] = 'React'; 
// // console.log(copy);

// var str = JSON.stringify(person);
// var copy = JSON.parse(str);

// copy.skills[3] = 'react'
// console.log(copy);
// console.log(person);


// Practice question-----------------
//1) var obj1  = {
//     name : 'chethan',
//     age  : 21,
//     course : 'Cohart 3.o'
// };

// console.log(obj1.name);
// console.log(obj1.age);
// console.log(obj1.course);
// console.log(obj1);

// var keys = Object.keys(obj1);
// var values = Object.values(obj1);
// var entries = Object.entries(obj1);

// console.log(keys);
// console.log(values);
// console.log(entries);

// 2)

// const car ={
//     brand : 'BMW',
//     model : 'M4',
//     year : 2022
// }
// // using dot (.) notation 

// console.log(car.brand);
// console.log(car.model);

// // using bracket notetoin

// console.log(car['brand']);
// console.log(car['model']);

// 3)-------------

// const user = {
//     name : "Anubhav",
//     age : 20
// } 

// user.age = 25;
// console.log(user);

// 4)-------------

// user.admin = true;
// console.log(user);

// 5)-------------

// const acc = {
//     username : 'John',
//     password : '12345'
// }

// delete acc.password
// console.log(acc);

// 6)---------------------------
// var Prop = {
//     a:1,
//     b:2,
//     c:3
// }

// function countProp(obj){
//     return (Object.keys(obj).length)
// }
// var res = countProp(Prop);
// console.log(res);


// using arrow function
// var res = (obj) => {
//     return (Object.keys(obj).length)
// }
// console.log(res(Prop));

// 7)--------------------

// const person = {
//     name : 'Rahul',
//     age : 22,
//     city : 'Delhi',
//     email: 'ccc@gmail.com'
// }

//it works but its not efficient 
// var res = (x) =>{
//     var keys = Object.keys(x);
//     return keys.includes('email');
// }
// console.log(res(person))

//this is efficiant 
// var res = (x) => ( 'email' in x );
// console.log(res(person));

// //this is much more efficient
// console.log('email' in person)

// 9)Merge 2 obj ---------------------

// const obj1 ={
//     a:1,
//     b:2
// }
// const obj2 ={
//     c:3,
//     d:4
// }
//suingn spread operator
// var copy = {...obj1,...obj2} 
// console.log(copy);

// Using JSON Methode
// var string = JSON.stringify({...obj1,...obj2});
// var copy2 = JSON.parse(string)
// console.log(copy2)


// --------------------------------------------------------
// Problem solving level
//------------------------------------------------------------

// 11)

// const marks = {
//     Anubhav : 95,
//     rahul : 82,
//     Aman : 90
// }

// type 1 - soln----
// var topper = (obj) => {
//     let top = 0 ;
//     let toper;
//     for(var i in obj){
//         if (top < obj[i]){
//             top = obj[i];
//             toper = i;
//         }
//     }
//     return toper;
// }
// console.log(topper(marks))

// soln type 2-------
// var agrade = (obj) => {
//     return ( Object.keys(obj).reduce((high,ele) =>{
//     if(obj[high]>obj[ele])
//         return high;
//     else 
//         return ele; 
// })
// )};

// console.log(agrade(marks));

// soln - geminnin --------
// const topper = (obj) => 
//   Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);

// console.log(topper(marks)); // Anubhav

// -------------------
// 12)

// const sal = {
//     john: 1000,
//     alex: 2000,
//     bob: 1500
// }

// var tot = (obj) => {
//     return Object.values(obj).reduce((sum,ele)=>{ return sum+=ele
//     },0);
// }

// console.log(tot(sal))

// -------------------
// 13)

// const user = {
//     name : "Chethan",
//     address : {
//         city : "Mysore",
//         pincode : 570024
//     }
// }

// console.log(user.address.city);
// console.log(user.address.pincode);

// -------------------
// 14)

// const obj = {
//     name : 'Anubhav',
//     marks : 45,
//     getResult : () => {
//         if(obj.marks > 40)
//             return ("pass");
//         else
//             return ("fail");
            
//     }
// }

// console.log(obj.getResult());

// ----------------------------------
// 15)

// const arr = [ "name", "Anubhav", "age", 24]
// var obj = {};

// for(var i = 0; i<arr.length; i+=2){
//     obj[arr[i]] = arr[i+1];
// }

// console.log(obj);


// Harder Practice Questions--------------------
// 16)


// var freqcount = (str) => {
//     let arr = str.split('');
//     let obj = {};
//     arr.forEach(element => {
//         if(element in obj)
//             obj[element] = obj[element]+1;
//         else
//             obj[element] = 1;
//     })
//     return obj
// }

// console.log(freqcount("banana"));

// 17)------------------
// Group by property

// const users = [
//     {name : 'A' , age : 20},
//     {name : 'B' , age : 21},
//     {name : 'C' , age : 20}
// ];

// var GroupBy = (arr) => {
//     let obj = {};
//     arr.forEach((i)=>{
//         if( i.age in obj )
//             obj[i.age].push(i) ;
//         else
//             obj[i.age] = [i];
//     })
//     return obj
// }

// console.log(GroupBy(users));

// 19)---------------------------------

// obj1 = {a:1,b:2};
// obj2 = {a:1,b:2};


// var isEqual = (o1,o2) =>{
//     keys1 = Object.keys(o1);
//     keys2 = Object.keys(o2);
//     if(keys1.length !== keys2.length) return false;
    
//     for(let ele of keys1){
//         if(o1[ele] !== o2[ele] ) return false 
//     }
//     return true
    
// }
// console.log(isEqual(obj1,obj2));

//20)-------------------------------------
// Reamove Duplicate

// var array = [
//     {id:1, name:'A'},
//     {id:2, name:'B'},
//     {id:1, name:'A'}
// ]

// var remDup = (arr) => {
//     var obj = {};
//     array.forEach(i => {
//          if(!(i.id in obj) )
//             obj[i.id] = i;ww
//     });
//     return obj;
// }

// console.log(remDup(array));


// var remDup = (arr) => {
//     let obj = {};
//     arr.forEach(i => {
//         if (!(i.id in obj)) {
//             obj[i.id] = i; // Store by key instead of .push()
//         }
//     });
//     return obj;
// };

// console.log(remDup(array));
// Output: { '1': { id: 1, name: 'A' }, '2': { id: 2, name: 'B' } }


// function createBankacc (){
//     var balance = 0;
//     return{
//         deposit(amount){
//             balance+=amount;
//             return balance;
//         },
//         getBalance(){
//             return balance;
//         }
//     }
// }

// var acc = createBankacc();
// console.log(acc);
// console.log(acc.getBalance());
// console.log(acc.deposit(100));
// console.log(acc.getBalance());


// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 
// };

// var objsize = (obj) => {
//     var arr = Object.keys(obj);
//     return arr.length;
// }
// console.log(objsize(student));


// function objsize(obj){
//     var arr = Object.keys(obj);
//     return arr.length;
// }


// --------------------------------------------------------------------

// phase - 4

// --------------------------------------------------------------------

// 'use strict'

// function abc(){
//     console.log(this)
// }
// abc()
// var obj = {
//     name : "chethan",
//     sayhi:() => {
//         console.log(this);
//     }
// }

// console.log(obj.sayhi())

// const user = {
//   name: "Rahul",
//   greet() {
//     console.log("Hi, " + this.name);
//   }
// };
// var fn = user.greet; // Hi, Rahul

// fn()

// ---------------------------------------------------
// Function sharing using 
    // call()
    // bind()
    // apply()
// ---------------------------------------------------

                    // call()
// var obj1 = {
//     Username : 'Chethan',
//     age : 22,
//     parent: function(){
//         return "Puttaswamy"
//     } 
// }
// var obj2 = {
//     Username : 'Yashu',
//     age : 22, 
// }

// function mother(){
//     return 'Hema'
// }

// function details(){
//     console.log(this.Username,this.age,obj1.parent.call(this),mother.call(this));
// }

// details.call(obj2);

// ----------------------------------------------------------------

// apply() - everything same to call() methode where in 


// call() -> send paremerter as diff variable .call(object_that-reffer, parameter_1, parameter_2,...)
// apply() -> send paremerter as Array[] .apply(object_that-reffer, [parameter_1, parameter_2,...] )
// bind() -> similar to call methode but it return a fucntioon to ececute
    // var out = --.bind(object_that-reffer, parameter_1, parameter_2,...)
    // out()  -- its output  == .call() outpur
// ---------------------------------------------------------------------


// prototype
// ----------------------------------------------------

// const animal = {
//   eats: true,
//   walk() { console.log("Animal chal raha hai"); }
// };

// const dog = Object.create(animal)

//  // dog ka prototype = animal
// dog.barks = true;



// console.log(dog.barks); // true (apna)
// console.log(dog.eats);  // true (animal se inherited!)
// dog.walk();             // Animal chal raha hai

//  



// var fn = intro.bind(person,22,'Mysuru');
// fn()

// intro.call(person,22,"Mysur");

// intro.apply(person,[22,'Mysuru']);


// function CreateBook(BN,AN,pages){
//     this.bookName = BN;
//     this.authourName = AN;
//     this.pages = pages;
// }

// let getInfo = function(){
//             console.log(this.bookName,this.authourName,this.pages);
//     }

// CreateBook.prototype.getInfo = getInfo;

// let book1 = new CreateBook('BagavathGeetha','Grurji','2000')
// let book2 = new CreateBook('GOT','Dwene','4000')

// console.log(book1)
// console.log(book2)


// function sayHi(){
//     this.name = 'Chethan';
// }

// let greet = function(){
//     console.log('Hello',this.name);
// }

// sayHi.prototype.greet = greet;

// const demo1 = new sayHi();
// demo1.greet()



// // console.log(book1.bookName)
// book1.getInfo();

// class MakeStudents{
//     constructor(fname,lname){
//         this.fname = fname;
//         this.lname = lname;
//     }
//     showprofile = ()=>{
//         {console.log(this.fname,this.lname);}
//     }
// }
// const s1 = new MakeStudents('Chethan', 'G P');
// s1.showprofile()

// class user{
//     constructor(fname,lname){
//         this.fname = fname;
//         this.lname = lname;
//     }
//     greet(){
//         console.log("Hello ", this.fname);
//     }
// }

// class Admin extends user{
//     constructor(fname,lname,age){
//         super(fname,lname);
//         this.age = age;
//         this.Access = true;
//     }
//      saybye() {
//         console.log("Bye ", this.fname);
//     }
// }

// function sayHi(){
//     console.log("Hi ", this.fname);
// }

// class staff extends user{
//     constructor(fname,lname){
//         super(fname,lname);
//     }
// }
// let u1 = new user('Ramya','Shree');
// let u2 = new Admin('Chethan','G P',22);
// let u3 = new staff('Zane','G P');
// console.log(u1);
// u2.greet()

// // sayHi.call(u3);

// console.log(u2)


// setTimeout(function(){
//     console.log('Hello')
// },3000);


//  ----------------------------------------------------

// Promise 

//  ----------------------------------------------------

// var a  = fetch('https://jsonplaceholder.typicode.com/todos/1')
// console.log(a)

// let p1 = new Promise(function(res,rej){
    
//     console.log("Starting...")
//     let result = 0;

//     setTimeout(function(){
//         if(result){
//             // console.log("value ture");
//             res();
//         }else{
//             // console.log("value false");
//             rej()
//         }
//     },3000)
// })

// p1.then(function(){
//     console.log("Promise is Complete");
// }).catch(function(){
//     console.log("Promise is Incomplete");
// }).finally(function(){
//     console.log("Promise end....")
// })


// -----------------------food order --------------------

// let myOrder = function(){

//     let p1 = new Promise(function(resolve,reject){
//         console.log("promise start...");

//         let status = true;
//         setTimeout(function(){
//             if(status){
//                 console.log("Order confirm")
//                 resolve();
//             }else{
//                 console.log("Order confirm")
//                 reject();
//             }
//         },2000)
//     })

//     p1.then(function(){
//         console.log("Mkaing Payment");
//         return new Promise((res, rej) => {
//             let PaymentDone = 1;
//             setTimeout(function(){
//                 if (PaymentDone){
//                     console.log("Payment Done....")
//                     res()
//                 }else{
//                     console.log("Payment failed..")
//                     rej();
//                 }     
//             },2000)
//         })
//     }).then(function(){
//         console.log("Order Deliverd");
//     }).catch(function(){
//         console.log("Order not deliverd....")
//     }).finally(function(){
//         console.log("Promise Ended")
//     })
// }

// myOrder();

// ---------------------------------------------

async function Async() {
    let response = await fetch('https://fakestoreapi.com/carts');
    console.log(response);
    
    let data = await response.json()
    console.log(data);
    data.forEach(element => {
        console.log(element.products);
    });
    
}

Async()