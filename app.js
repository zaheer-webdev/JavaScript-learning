// chap no 1

// Q no1

// alert("this is my web page")

// Q no2

// alert("Error! please enter a valid password")

// Q no3

// alert("Welcome to js land... \n Happy Coding")

// Q no4

// alert("Welcome to js land...")

// alert("Happy Coding")

// Q no5

// console.log("Hello i can run js through my console");

// Q no6

// i have used alerts in my projects//

// Q no7

//d//

// chap no 2

// Q no1

// var name = "Zaheer";

// Q n02

// var myname = "Zaheer Ud Din";

// Qno3
// var message;
// var message= "Hello World";

// alert(message);

// Qno4

// var studentName = "Zaheer";
// var age = 15;
// var className = "10th";

// alert(studentName);
// alert(age);
// alert(className);

// Qno5

// var food = "PIZZA \n PIZZ \n PIZ \n PI \n P";

// alert(food);

// Qno6

// var email = "zaheerud din@example.com";
// alert(email);

// Qno7

// var book = "A smarter way to learn JavaScript";
// alert(book);

// Qno8

// document.write("Yah! I can write HTML content through JavaScript");

// Qno9

// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);

// chap no 3

// Qno1

// var age = 15;
// alert("I am " + age + " years old");

// Q no2

// var visit = 14;
// alert("You have visited this site " + visit + " times");

// Q no3

// var birthYear = 2010;
// document.write("My birth year is " + birthYear + "<br> Data type of my declared variable is number");

// Q no4


// var visitorName = "John Doe";
// var productTitle = "T-shirt(s)";
// var quantity = 5;


// chap no 4

// Qno1

// var name1 = "Zaheer", name2 = "Ali", name3 = "Ahmed";

// Qno2

// var _myName = "Zaheer";
// var $myAge = 15;
// var myClass = "10th";


// var name = "Zaheer";
// var age = 15;
// var class = "10th";


// Q no3

// document.write("<h1>Rules for naming JS variables</h1> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>  Variable names can only contain letters, numbers, $ and _. For example: $my_1stVariable <br> Variable must begin with a letter, $ or _. For example: $name, _name or name <br> Variable names are case sensitive <br> Variable names should not be JS keywords");

// chap no 5

// Qno1

// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum);


// Qno2

// var num1 = 3;
// var num2 = 5;
// var sub = num1 - num2;
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub);

// Qno3

// var num;

// document.write("Value after variable declaration is: " + num + "<br>");

// num = 5;    
// document.write("Value after initialization is: " + num + "<br>");

// num++;
// document.write("Value after increment is: " + num + "<br>");

// num = num + 7;
// document.write("Value after addition is: " + num + "<br>");

// Qno4

// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;
// document.write("cost of one ticket is " + ticketPrice + "<br> Total cost to buy 5 tickets to a movie is " + totalCost);
// document.write("cost of buying 5 tickets to a movie is " + totalCost);

// Qno5

// var num = 4;
// for(var i = 1; i <= 10; i++){
//     document.write(num + " x " + i + " = " + num * i + "<br>");
// }

// Qno6

// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F <br>");

// var fahrenheit = 86;
// var celsius = (fahrenheit - 32) * 5/9;
// document.write(fahrenheit + "°F is " + celsius + "°C");

// Qno7

//  var price1 = 650;
//  var price2 = 100;
//  var quantity1 = 3;
//  var quantity2 = 7;
//  var shippingCharges = 100;

//  var total1 = price1 * quantity1;
//  var total2 = price2 * quantity2;
//  var totalCost = total1 + total2 + shippingCharges;

//  document.write("<h1>Shopping Cart</h1> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> Price of item 1 is " + price1 + "<br> Quantity of item 1 is " + quantity1 + "<br> Price of item 2 is " + price2 + "<br> Quantity of item 2 is " + quantity2 + "<br> Shipping Charges " + shippingCharges + "<br><br><br><br><br><br><br><br><br><br><br><br><br>Total cost of your order is " + totalCost);


// chap no 6-9

// Qno1

// var a = 10;
// document.write("Result: <br> The value of a is: " + a + "<br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>");

// Qno2

//  var a = 2, b = 1;
//  var result = --a - --b + ++b + b--;
//  document.write("a is: " + a + "<br> b is: " + b + "<br> result is: " + result);

// Qno3

// var studentName = prompt("Enter your name: ");
// alert("Welcome " + studentName + " to our website!");

// Qno5

// var num = prompt("enter a number to show its multiplication table: ");
// if( num === ""){
//     num = 5; }

//     document.write("<h1>Multiplication Table of " + num + "</h1> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>");
// for(var i = 1; i <= 10; i++){
//     document.write(num + " x " + i + " = " + num * i + "<br>");
// }

// // Qno6

// var subject1 = prompt("Enter name of first subject: ");
// var subject2 = prompt("Enter name of second subject: ");
// var subject3 = prompt("Enter name of third subject: ");

// var totalMarks = 100;

// var obtainedMarks1 = +prompt("Enter obtained marks for " + subject1 + ": ");
// var obtainedMarks2 = +prompt("Enter obtained marks for " + subject2 + ": ");
// var obtainedMarks3 = +prompt("Enter obtained marks for " + subject3 + ": ");

// vartotalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

// var totalAllSubjects = totalMarks * 3;

// var percentage1 = (obtainedMarks1 / totalMarks) * 100;
// var percentage2 = (obtainedMarks2 / totalMarks) * 100;
// var percentage3 = (obtainedMarks3 / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>");

// chap no 9-11

// Qno1

// var city = prompt("Enter your city name: ");
// if(city.toLowerCase() === "karachi"){
//     alert("Welcome to the city of lights!");
// }
// else{
//     alert("Welcome to " + city + "!");
// }

// Qno2

// var gender = prompt("Enter your gender (male/female): ");
// if(gender.toLowerCase() === "male"){
//     alert("Good Morning Sir!");
// }
// else if(gender.toLowerCase() === "female"){
//     alert("Good Morning Ma'am!");
// }
// else{
//     alert("Good Morning!");
//     }

// Qno3
 
// var color = prompt("Enter traffic signal color (red/yellow/green): ");
// if(color.toLowerCase() === "red"){
//     alert("Must Stop");}
//     else if(color.toLowerCase() === "yellow"){
//     alert("Ready to move");}
//     else if(color.toLowerCase() === "green"){
//     alert("Move now");}
//     else{
//     alert("Invalid color!");}

// Qno4

// var fuel = +prompt("Enter remaining fuel in your car (in litres): ");
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car!");
// }
// else{
//     alert("You have enough fuel in your car.");
// }

// Qno5

// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

// if (true){
//     alert("True");
// }   if (false){
//     alert("False");
// }



// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// Qno6

// var obtainedMarks1 = +prompt("Enter obtained marks for subject 1: ");
// var obtainedMarks2 = +prompt("Enter obtained marks for subject 2: ");
// var obtainedMarks3 = +prompt("Enter obtained marks for subject 3: ");


// var totalobtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalobtainedMarks / 300) * 100;

// var grade, remarks;

// if(percentage >= 80){
//     grade = "A-one";
//     remarks = "Excellent";
// }   else if(percentage >= 70){
//     grade = "A";
//     remarks = "Good";
// } else if(percentage >= 60){
//     grade = "B";
//     remarks = "You need to improve";
// } else{
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write("<h1>Marks Sheet</h1> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>");
// document.write("Total Marks: 300 <br>");
// document.write("Marks Obtained: " + totalobtainedMarks + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "% <br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks + "<br>");


// Qno7

// var secretNumber = 7;
// var userGuess = +prompt("Guess the secret number (between 1 and 10): ");
// if(userGuess === secretNumber){
//     alert("Bingo! Correct answer.");
// } else if(userGuess === secretNumber + 1 || userGuess === secretNumber - 1){
//     alert("Close enough to the correct answer.");
// } else{
//     alert("Wrong guess! The secret number was " + secretNumber + ".");
// }

// Qno8

// var number = +prompt("Enter a number to check if it is divisible by 3: ");
// if(number % 3 === 0){
//     alert(number + " is divisible by 3.");
// } else {
//     alert(number + " is not divisible by 3.");
// }

// Qno9

// var number = +prompt("Enter a number to check if it is even or odd: ");
// if(number % 2 === 0){
//     alert(number + " is an even number.");
// } else {
//     alert(number + " is an odd number.");
// }


// Qno10

// var temperature = +prompt("Enter the temperature: ");

// if(temperature > 40){
//     alert("It is too hot outside.");
// }else if(temperature > 30){
//     alert("The weather today is normal.");
// }else if(temperature > 20){
//     alert("Today's weather is cool.");
// }else if(temperature > 10){
//     alert("OMG! Today's weather is so cool.");
// }else{
//     alert("It's freezing outside!");
// }

// Qno11

// var firstNumber = +prompt("Enter the first number: ");
// var secondNumber = +prompt("Enter the second number: ");
// var operation = prompt("Enter the operation (+, -, *, /, %): ");

// if(operation === "+"){
//     var result = firstNumber + secondNumber;
//     alert("The result of addition is: " + result);
// }else if(operation === "-"){
//     var result = firstNumber - secondNumber;
//     alert("The result of subtraction is: " + result);
// }else if(operation === "*"){
//     var result = firstNumber * secondNumber;
//     alert("The result of multiplication is: " + result);
// }else if(operation === "/"){
//     if(secondNumber !== 0){
//         var result = firstNumber / secondNumber;
//         alert("The result of division is: " + result);
//     }else{
//         alert("Division by zero is not allowed.");
//     }
// }