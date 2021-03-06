//First question

Problem:
Write a function called “addFive”.
Given a number, “addFive” returns 5 added to that number.

var num = 10;
function addFive(num) { 
    return 5+num

}
var result = addFive(num)
console.log(result)
console.log(addFive(5)) //prints 10
console.log(addFive(0)) //prints 5
console.log(addFive(-5)) //prints 0

//2nd question


Problem:
Fill in your code that takes an number minutes and converts it to seconds.



var min = 5;
function toSeconds(min) {
    return min*60
}
var secs = toSeconds(min)
console.log(secs)
console.log(toSeconds(3))                 //prints 180  seconds


//3rd question

Problem
Create a function that takes a string and returns it as an integer.
Examples
toInteger(“6”) ➞ 6



//mycode starts here


var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr)
    
}
var myint = toInteger(mystr)
console.log(myint)
console.log(toInteger("3")) //prints int value 3


//4th question



Create a function that takes a number as an argument, increments the number by +1 and returns the result.
Examples
nextNumber(0) ➞ 1

//mycode starts here


var myint = 0;
function nextNumber(myint) {
    
   myint++
   return myint
}
var myNextint = nextNumber(myint)
console.log(myNextint)

console.log(nextNumber(9))                     //prints 10






//5th question


Problem:
Create a function that takes an array and returns the first element.
Examples
getFirstElement([1, 2, 3]) ➞ 1





var arr = [1, 2, 3];
function getFirstElement(arr) {
    
    return arr[0]
    
}
var data = getFirstElement(arr)
console.log(data)
console.log(getFirstElement([6,4,9]))


//6th question

Problem:
Convert Hours into Seconds
Write a function that converts hours into seconds.
Examples
hourToSeconds(2) ➞ 7200



//my code starts here


var hour = 2
function hourToSeconds(hour) {
    
    return hour*60*60
}
var data = hourToSeconds(hour)
console.log(data)
console.log(hourToSeconds(24))            //prints 86400


//7th question

Problem:
Find the Perimeter of a Rectangle
Create a function that takes height and width and finds the perimeter of a rectangle.


//my code starts here



function findPerimeter(num1,num2) {
    return 2*(num1+num2)
}
var peri = findPerimeter(6,7)
console.log(peri)
console.log(findPerimeter(3,2))                    //prints 10




//8th question 

Problem
Less Than 100?
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.


//my code starts here

function lessThan100(num1,num2) {
    let sum=num1+num2
    
    if(sum<100){
        return true
    }
    else{
        return false
    }}
var res = lessThan100(22,15)
console.log(res)                            //return true
console.log(lessThan100(100,200))           //return false


//9th question

Problem
There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
Examples
remainder(1, 3) ➞ 1





function remainder(num1,num2) {
    
    return num1%num2
}
var res = remainder(1,3)
console.log(res)
console.log(remainder(-9,45))             //return -9
console.log(remainder(5,5))               //return 0




Problem:
Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
Examples
divisibleByFive(5) ➞ true




var num1=10
function divisibleByFive(num1) {
    if (num1%5==0) {
        return true
    }
    else{
        return false
    }
}
var divisible = divisibleByFive(5)
console.log(divisible)
console.log(divisibleByFive(15))                    //return true
console.log(divisibleByFive(18))                      //return false





Problem:
Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.

Input:
isEven(12);

output:
true



function isEven(num){
    
    
    if (num%2==0) {
        return true
    }
    else{
        return false
    }
 // your code here
}
var even = isEven(2)
console.log(isEven(6))                      //return true
console.log(isEven(5))                      //return false








Problem:
Write a function called “areBothOdd”.
Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

Input:
areBothOdd(1, 3);


function areBothOdd(num1, num2){
    
    if(num1%2==0 || num2%2==0){
        return false
        
    }
    else{
        return true
        
        
    }
 // your code here
}

console.log(areBothOdd(1,3))                //return true
console.log(areBothOdd(2,3))                //returns false







Problem:
Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

Input:
getFullName(“GUVI”, “GEEK”);
Output:
“GUVI GEEK”




var firstName=""
var lastName=""
function getFullName(firstName, lastName){
    
 // your code here
 
 return firstName+lastName
}
console.log(getFullName("guvi","geeks"))
