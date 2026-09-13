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

