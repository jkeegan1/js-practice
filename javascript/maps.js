const food = new Map([
    ["chickey nuggies", 20],
    ["milk shake", 1],
    ["french fries", 36]
]);
food.set("french fries", 2);
console.log(food);//print all values of map
console.log(food.get("chickey nuggies"));//print specific value
console.log(food.size);
if(food.has("burgers")){
    console.log("burgers exist in this map")
}
else
{
    console.log(food, "burgers dont exist in this map");
}

////////////////////////////////////////////////////////////////////////////////////////////////////
let text = "";
food.forEach (function(value, key) {
  text += key + ': ' +  value+ '  ';
})
console.log(text);