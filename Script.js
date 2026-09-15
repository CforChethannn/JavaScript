// Console & Basics

// // 1. Print `"Hello JavaScript"` in the console.
// console.log("Hello JavaScript");

// // 2. Print your name, age, and city using one `console.log()`.
// console.log("Chethan G P "+ 22 + " Mysuru");

// // 3. Print a warning message using `console.warn()`.
// console.warn("This is Warning ..");

// // 4. Print an error message using `console.error()`.
// console.error("This is Error..")

// // 5. Use `console.table()` to display an array of 5 numbers.
// console.table(["Name","age","Chethan",22])

// ---------------------------------------------------------------------

// Variables

// // 1. Create a variable called `studentName` and store your name in it.
// var studentName = 'Chethan'

// // 2. Create a variable `age` and print it.
// var age = 22;
// console.log(age);

// // 3. Create two variables and swap their values.
// var a = 10;
// var b = 20;
// var temp = a
// a = b;
// b=temp;
// console.log((a)+ " "+ (b));

// // 4. Create a constant variable for `PI` and print it.
// const PI = 3.14;

// // 5. Declare a variable without assigning a value and print it.
// var k;
// console.log(k);

// // 6. Create a variable `score` and increase it by 10.
// var score = 20;
// score+=10;
// console.log(score);

// // 7. Create three variables for first name, last name, and full name.
// var fname;
// var lname,fullname;

// ---------------------------------------------------------------------

// ## Data Types

// 1. Create variables of type string, number, boolean, null, and undefined.

// var a = 10;
// var b = 'dd'
// var c = true
// var d = null
// var e = undefined

// console.log(a+b+c+d+e)

// // 2. Check the type of different variables using `typeof`.
// console.log(typeof(ph));

// // 3. Store mobile number in a variable and check its type.
// // 5. Create a bigint number and print it.
// var ph = 8050612111111111162n;
// console.log(typeof(ph));

// // 4. Create a variable with value `null` and check its type.
// console.log(typeof(d)); //-- object 


// ---------------------------------------------------------------------

// ## Type Conversion & Coercion

// 1. Convert the string `"50"` into a number.
    // var str = "50";
    // var n = Number(str);
    // console.log(typeof(n))


// 2. Convert the number `100` into a string.
    // var n = 100;
    // var str = String(n);
    // console.log(str)

// 3. Convert `"true"` into a boolean.
    // var str = "true";
    // var bool = Boolean(str);
    // console.log(typeof(bool))
    // console.log(bool)

// 4. Check the output of:
// - `"5" + 2` -> 52
// - `"5" - 2` -> NaN x -->right (3)
// - `true + 1` -> true1 x --> right(2) -->1+1

    // console.log(true + 1)

// 1. Create a variable with value `"123abc"` and convert it into a number.

// var a = "123abc";
// var b = Number(a)
// console.log(b)

// 2. Use `parseInt()` on `"500px"`.
// console.log(parseInt("xyz"));
// console.log(parseInt("99",10));
// console.log(parseInt("ff",16));//--> in hexa decimal the ff == 255
// console.log(parseInt("99",8)); //--> in octal decimal there is no 9

// ---------------------------------------------------------------------

// ## Operators

// 1. Add two numbers and print the result. 
//     var a = 10;
//     var b = 20;
//     console.log(a+b);

// // 2. Find the remainder when 25 is divided by 4.
//     console.log(25%4)

// // 3. Find the square of a number using exponent operator.
//     console.log(2**2)

// // 4. Increment a variable using `++`.
//     a++;
//     console.log(a)

// // 5. Decrement a variable using `-`.
//     a--;
//     console.log(a);

// // 6. Use `+=` operator to increase a variable by 20.
//     console.log(a+=20)

// // 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
//     console.log(a<b)

// // 8. Check if two values are strictly equal using `===`.
// // 9. Compare `"10"` and `10` using both `==` and `===`.
//     var k1=5;
//     var k2='5';
//     console.log(k1===k2)

// // 10. Create two boolean variables and test `&&`, `||`, and `!`.
//     var j1= true;
//     var j2= false;
//     console.log(!j2 )

// ---------------------------------------------------------------------

// ## Strings

// // 1. Create a string and print its length.
//     var fname = "Chethan G P"; 
//     console.log(fname.length)   //11

// // 2. Convert a string into uppercase.
//     console.log(fname.toUpperCase());   //CHETHAN G P
    
// // 3. Convert a string into lowercase.
//     console.log(fname.toLowerCase());   //chethan g p

// // 4. Check if a string includes the word `"JavaScript"`.
//     var h1 = "the JavaScript is a Scripting Launguage";
//     console.log(h1.includes("JavaScript")); //true

// // 5. Extract the word `"World"` from `"Hello World"`.
//     var h = "Hello World"
//     console.log(h.slice(6));    //World

// // 6. Replace `"apple"` with `"mango"` in a sentence.
//     var k = "apple is king of fruits";
//     console.log(k.replace("apple","mango")) //mango is king of fruits

// // 7. Split `"HTML,CSS,JS"` into an array.
//     var k1 = "HTML,CSS,JS";
//     console.log(k1.split(",")); //['HTML', 'CSS', 'JS']

// // 8. Remove extra spaces from a string.
//     var str1 = "  no space  ";
//     console.log(str1.trim());   //no space

// // 9. Repeat the word `"Hi"` 5 times.
//     var str2 = "Hi";
//     console.log(str2.repeat(5))

// // 10. Print the first character of a string.
//     var str3 = "Helloo..";
//     console.log(str3[0])

// // 11. Use template literals to print:`"My name is Aman and I am 20 years old"`

//     var fname = "Aman";
//     var age = 20;
//     console.log(`My name is ${fname} and I am ${age} years old`);

// ---------------------------------------------------------------------

// ## Numbers & Math

// 1. Round `4.7` using `Math.round()`.
//     var num1 = 4.7;
//     console.log(Math.round(num1)); // 5

// // 2. Find the square root of 81.
//     console.log(Math.sqrt(81)); //9

// // 3. Find the maximum number from `10, 20, 5, 99`.
//     console.log(Math.max(10,20, 5, 99));

// // 4. Generate a random number between 1 and 10.
//     console.log(Math.floor(Math.random()*10))

// // 5. Convert `"99.99"` into an integer.
//     console.log(Math.round(99.99))

// // 6. Check whether `25` is an integer or not.
//     console.log(Number.isInteger("hi")) // -> False
//     console.log(Number.isInteger(25)) // -> true

// // 7. Use `toFixed(2)` on `3.141592`.
//     console.log(123.4567.toFixed(2));


// ---------------------------------------------------------------------

// ## Conditionals

// 1. Check whether a number is positive or negative.
//     var a = 10;
//     var b = -5;
//     if(b>-1)
//         console.log("+ve");
//     else
//         console.log("-ve");

// // 2. Check whether a number is even or odd.
//     if(b%2==0)
//         console.log("Even..")
//     else
//         console.log("Odd..")

// // 3. Check whether a person is eligible to vote.

// var age = 18;
//     if(age>=18)
//         console.log("Eligable..")
//     else
//         console.log("Not Eligable..")

// // 4. Find the largest among two numbers.
//     if(a>b)
//         console.log("a larger..")
//     else
//         console.log("b larger");


// // 5. Find the largest among three numbers.
//     let c = 20
//     if(a>b){
//         if(a>c)
//             console.log("a larger..");
//         else
//             console.log('c larger..');
//     }else if(b>c){
//         console.log('b larger..');
        
//     }

// // 6. Check whether a year is a leap year.
//     var year = 2024;
//     if((year%100 !== 0 && year%4 === 0 ) || (year%400 === 0 ))
//         console.log(year + " is a leap year..")
//     else
//         console.log(year + " is not a leap year..")

// // 7. Check whether a number is divisible by both 3 and 5.
//     if((15%3 === 0) && (15%5===0))
//         console.log("yaah divisible by both 3 and 5")
//     else
//         console.log("not divisible by both 3 and 5")

// // 8. Create a simple grading system:
// // - 90+ → A
// // - 75+ → B
// // - 50+ → C
// // - below 50 → Fail
//     var marks = 49;    
//     if(marks>=90 && marks<=100)
//         console.log("A grade")
//     else if(marks>=75 && marks<=89)
//         console.log("B grade")
//     else if(marks>=50 && marks<=74)
//         console.log("C grade")
//     else
//         console.log("Fail....")

// // 1. Check whether a character is a vowel or consonant.
//     var ch = 'c'
//     if ((ch==='a') || (ch==='e') || (ch==='i') || (ch==='o') || (ch==='u') )
//         console.log(ch+ ' is a vowels');
//     else
//         console.log(ch+ ' is not a vowels');

// // 2. Create a calculator using `switch` statement.
//     var sym ='**';
//     switch(sym){
//         case '+': console.log(a+c);
//                     break;
//         case '-': console.log(a-c);
//                     break;
//         case '/': console.log(a/c);
//                     break;
//         case '%': console.log(a%c);
//                     break;
//         case '*': console.log(a*c);
//                     break;
//         default: console.log("Illegal operator...");
//     }

// // 3. Print the day name based on a number (1–7).
//     var day = 8;
//     switch(day){
//         case 1: console.log("Monday");
//                     break;
//         case 2: console.log("Tuesday");
//                     break;
//         case 3: console.log("wed");
//                     break;
//         case 4: console.log("thurs");
//                     break;
//         case 5: console.log("Fri");
//                     break;
//         case 6: console.log("Sat");
//                     break;
//         case 7: console.log("Sunday");
//                     break;
//         default: console.log("Illegal day number...");
//     }

// // 4. Check whether a username is `"admin"` and password is `"1234"`.
//     var username = 'admin';
//     var pass = '1234';
    
//     if (username === "admin" && pass ==="1234")
//         console.log("access granted..")
//     else
//         console.log("access denaid..")

// ---------------------------------------------------------------------

// ## Truthy & Falsy

// 1. Check whether an empty string is truthy or falsy. ---falsyy
//     var str = ''
//     if(str){
//         console.log("true")
//     }else{
//         console.log("falsyy")
//     }

// // 2. Check whether `0` is truthy or falsy.
//     if(1){
//         console.log("true")
//     }else{
//         console.log("falsyy")
//     }

// // 3. Check whether `[]` is truthy or falsy.
//     var arr = [] //--> empty array is truthyy
//     if(arr){
//         console.log("true")
//     }else{
//         console.log("falsyy")
//     }

// // 4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.
//     var b = 10;
//     console.log(b)
//     if(b){
//         console.log("Valid")
//     }else{
//         console.log("Invalid")
//     }

// ---------------------------------------------------------------------

// ## Ternary Operator

// // 1. Check whether a number is even or odd using ternary operator.
    
//     (12%2===0)? console.log("Even"):console.log("Odd");

//     // OR

//     console.log( 13%2===0 ? 'even':'odd')


// // 2. Check whether age is above 18 using ternary operator.

//     console.log( 12>=18 ? '18+':'17-')

// // 3. Find the greater number between two values using ternary operator.
//     console.log( 12>=18 ? '12':'18')

// ---------------------------------------------------------------------

// ## Mixed Practice Questions

// 1. Create a mini biodata program using variables and template literals.
//     var name = "chethan G P";
//     var age = 22;
//     var place = 'Mysuru'

//     console.log(`My name is ${name} I am ${age} year old and my native is ${place}`)


// // 2. Calculate the area of a rectangle.
//     var area = (b,h)=>{
//         return b*h
//     }
//     console.log(area(5,5))

// // 3. Calculate the simple interest.
//     var SI = pTr/100;


// // 4. Convert temperature from Celsius to Fahrenheit.
    
//     var f = 30 * (9/5) + 32;
//     console.log(f);

// // 5. Convert kilometers into meters.
//     function km2m(km){
//         return(km*1000)
//     }
//     console.log(km2m(5));


// // 6. Calculate total marks and percentage of 5 subjects.
//     tmarks = s1+s2+s3+s5;
//     perc = (tmarks/400)*100;

// // 7. Calculate electricity bill based on units consumed.


// // 8. Create a username generator using first name and birth year.
//     var fname = "chethan";
//     var dob  = 842005;

//     function gen(fname,dob){
//         let cleanName = fname.trim();
//         let randno = Math.floor(Math.random()*10000);
        
//         return `${cleanName}_${randno}_${dob}`;
//     }

//     console.log(gen(fname,dob))
    

// // 9. Check whether a string starts with a specific letter.
//     let str1  = "I am Chethan"
    
//     Built in
//     console.log(str1.startsWith("i"))



//     Manual

//     if(str1[0] === "I")
//         console.log("True")
//     else
//         console.log("False")

// // 10. Count the total characters in a sentence excluding spaces.

// ---------------------------------------------------------------------

// ## Logical Thinking Questions

// // 1. Take two numbers and print which one is greater.
// // 2. Check whether a number lies between 10 and 50.
// // 3. Check whether a password length is greater than 8.
//     var num = 12345678;
//     if (num/10000000 >=1 )
//         console.log("geater")
//     else
//         console.log("lesser")

// // 4. Check if a person can drive:
// // - age > 18
// // - has license = true
// // 1. Check whether a number is divisible by 2, 3, or both.
// // 2. Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.
// // 3. Find whether a number is a multiple of 10.
// // 4. Create a simple discount calculator.
//     function calc(price,dis){
//         return ((price* (100-dis))/100);
//     }

//     console.log("$ "+ calc(100,10)+ " Only")

// 5. Check whether a product is in stock.
// 6. Calculate final bill after GST.

// ---------------------------------------------------------------------

// ## Challenge Questions for Beginners

// // 1. Generate a random OTP of 4 digits.
//     var OTP = ()=>{
//         return Math.floor(1000+Math.random()*9000)
//     }
//     console.log(OTP())

// // 2. Reverse a 3-letter string manually.
    // var str = "ZOM"

//     var revstr = "";
//     let i=str.length-1;
//     while( i>-1 ){
//         revstr += str[i--];
//     }
//     console.log(revstr);

// // 3. Find the last character of a string.
//     console.log(str[str.length-1]);

//     // or

//     console.log(str.at(-1))

// 4. Convert a full name into uppercase initials.

    // cosnverting every word first letter to uppercase
    // var fname = 'chethan g p '
    // function uppercaseInitals(fname){
    //     return fname.trim().split(" ").map((ele)=>{
    //         return (ele[0].toUpperCase() + ele.slice(1).toLowerCase());
    //     }).join(" ")
    // }
    // console.log(uppercaseInitals(fname));

    // uppercase initials.
    // var arr =  ['chethan', 'g', 'p']
    // var init = ''
    // arr.forEach((ele)=>{
    //    init += ele[0].toUpperCase();
    //    console.log(ele)
    // })

    // console.log(init)

// 5. Check whether two strings are equal ignoring case sensitivity.

    // if("Five" === "Five")
    //     console.log("casesensitivr")
    // else
    //     console.log("NO")

// // 6. Create a simple login validation system.

//     var user = "chethan G P"
//     var pass = "Chethu@842005"

//     if(user.trim().toLowerCase() === "chethan g p" && pass.trim() === "Chethu@842005" )
//         console.log("Loged In");
//     else
//         console.log("UserName or Password Wrong");
        

// // 7. Find whether a number is a 2-digit or 3-digit number.
//     var n = 10
//     if(n>=10 && n<=99)
//         console.log("2 digit")
//     else if(n>=100 && n<=999)
//         console.log("3 digit")


// // 8. Create a mini ATM balance checker.
//     let balance = 0;



// // 9. Simulate a traffic light system using `switch`.

//     var col = "green"
//     switch(col){
//         case 'red': console.log("Stop...");
//                     break;
//         case 'green': console.log("Goo...");
//                     break;
//         case 'yellow': console.log("Ready...");
//                     break;
//         default:console.log("NOT working OR invalid Color")
//     }

// // 10. Build a small marksheet generator using variables and conditionals.


// ---------------------------------------------------------------------

// # Part 1 — Functions Basics (1–20)

// ---------------------------------------------------------------------
// ## Beginner Level

// // 1. Create a function named `greet` that prints `"Hello World"`.
//     function greet(){
//         console.log("Hello....")
//     }

// // 2. Create a function `add(a, b)` that returns the sum.
//     function sum(a,b){
//         return a+b;
//     }

// // 3. Write a function to calculate the square of a number.
//         function square(n){
//             return n**2;
//         }

// // 4. Create a function that checks whether a number is even or odd.
//         function checkErO(n){
//             return (n%2==0)?"even":"Odd";
//         }
//         console.log(checkErO(7))

// // 5. Write a function that converts Celsius to Fahrenheit.
//         function cel2Fah(c){
//             return (c*(9/5)+32);
//         }
//         console.log(cel2Fah(30))

// // 6. Create a function with default parameter `"Guest"`.

//         function greet (user = "guest"){
//             return("hello..."+user)
//         }

//         console.log(greet("Chethan"));

// // 7. Write a function that returns the greater of two numbers.
//         var large = (a,b)=>((a>b)?a:b);
//         console.log(large(14,5))

// // 8. Create a function to calculate area of rectangle.
//         var area = (l,b)=>{  return l*b }
//         console.log(area(14,5))


// // 9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
//         function Agecheck(age){
//             if(age>=18){
//                 return "Adult"
//             }else{
//                 return "Child"
//             }
//         }

//         console.log(Agecheck(8))

// // 10. Create a function to reverse a string.

//         function revString(str){
//             let rev = "";
//             for(let i=str.length-1; i>=0; i--){
//                 rev += str[i];
//             }
//             return rev;
//         }
// //         console.log(revString("ZooM"))

// ---------------------------------------------------------------------
    // Intermediate Level

// // 1. Write a function expression for multiplication.
//     var mal = function(a,b){
//         return a*b;
//     }

// // 2. Convert a normal function into an arrow function.
//     var malti = (a,b)=>{a*b}

// 3. Create a function that accepts unlimited numbers and returns their sum using rest operator.
    // var sum = (...c)=>{
    //     return c.reduce((sum,ele)=>sum+ele,0);
    // }
    // console.log(sum(10,20,30,40))

// 4. Write a function that counts vowels in a string.
    // var str = 'I am Chethan G P'

     // // Type One --------------
    
    // var vCount = (str)=>{
    //     let count=0;
    //     for(let i=0; i<=str.length-1; i++){
    //         if ("aeiou".includes(str[i].toLowerCase()))
    //             count++;
    //     }
    //     return count;
    // }
    // console.log(vCount(str))

    // //Type One --------------

    // var vCount2 = (str)=>{
    //     let count=0;
    //     str.toLowerCase().trim().split("").forEach(element => {
    //         if("aeiou".includes(element))
    //             count++;
    //     });
    //     return count;
    // }
    // console.log(vCount2(str));

// 5. Create a function that checks if a string is palindrome.

    //  // function taken from above--------
    // var palindromeCheck = (str)=>{
    //     let revstr = revString(str);
    //     if(revstr === str)
    //         return "Pallindrom"
    //     else
    //         return "Not a Pallindrom"
    // }
    // console.log(palindromeCheck("ZooZ"))

// 6. Write a callback function example using `setTimeout`.

    // setTimeout(()=>{
    //     console.log("Priint after 3sec...")
    // },3000)

// 7. Create a higher-order function that executes another function twice.
    // var kk = setInterval(()=>{
    //     console.log("This is HigherOrder function that execute twice..")
    // },2000);
    // setTimeout(()=>{
    //     console.log("gi")
    //     clearInterval(kk);
    // },4000)

// 8. Write a function that returns another function.
//     var square = function (n){
//         return n**2
//     }
//  var squarRoot = ()=>{
//     return square;
//  }
//  console.log(squarRoot()(5))

// 9. Create a pure function for subtraction.

// function sub(a,b){
//     return a-b;
// }

// 10. Create an impure function using global variable modification.

    // var count=0;

    // function inc(){
    //     return count++;
    // }

    // console.log(inc())
    // console.log(inc())
    // console.log(inc())
    // console.log(count)

// ---------------------------------------------------------------------
