let x = 7;
let y= 10;
let z = 7;

if (x == y)
{
    console.log("x equals y ");
}
else 
{
    console.log("x doesnt equal y");
}

if(x != y){
    console.log("x doesnt equal y");
}

if(x == z)
{
 console.log(x ,"=", z );
}
////////////////////////////////////////////////////////////////////////////////////////////////////
const person = {firstName:"dave", lastName:"burd", age:21, eyeColor:"blue"};
console.log(person.firstName);

let p = person.firstName.split("a");
console.log(p);
////////////////////////////////////////////////////////////////////////////////////////////////////

const athletes = ["Lebron", "Odell", "Shaq", "Lamello", "Myles", "Baker"];
athletes.pop();
console.log(athletes);
athletes.push("Dwade","Drose", "Kobe");
console.log(athletes);
///////////////////////////////////////////////////////////////////////////////////////////////////

const numarr = [4, 6, , 34, 56, 77, 22, 49, 1];
let filteredarr = numarr.some(myfunc); // checks if some of the array elements pass 

function myfunc(value)
{
    return value < 25;
}
console.log(filteredarr);
///////////////////////////////////////////////////////////////////////////////////////////////////

const numarr2 = [4, 6, , 34, 56, 77, 22, 49, 1];
let filteredarr2 = numarr2.every(myfunc); // checks if ALL of the array elements pass 

function myfunc(value)
{
    return value < 25;
}
console.log(filteredarr2);