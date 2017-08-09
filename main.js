/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.

*/

function test() {
    var string = "This Works!";
    return string;
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/

function sum(arr) {
    var result = 0;
    for (i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result;
};
sum([1, 2, 3]);





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/

function doubleNumbers(arr) {
    var result = [];
    for (i = 0; i < arr.length; i++) {
        result.push(2 * arr[i])
    }
    return result;
}
doubleNumbers([1, 2, 3])





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/

function multiplyNumbers(arr,num) {
    var result = [];
    for (i = 0; i < arr.length; i++) {
      result.push(arr[i]*num);
    }
    return result;
};
multiplyNumbers([1, 2, 3],5)



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/

function doubleLetters(string) {
  var result='';
  for(i=0; i<string.length; i++){
  result+=(string[i]+string[i])
  }
  return result;
}
doubleLetters('abc')



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/

function interleave(arr1, arr2){
  var result = [];
  for(i=0; i<arr1.length; i++){
    result.push(arr1[i], arr2[i])
  }
  return result;
}
interleave(["a", "b", "c"],["d", "e", "f"])



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/

function createRange(num,word){
  var result = [];
  for (i=1; i<=num; i++){
    result.push(word)
  }
  return result;
}
createRange(5,'fawkes')



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/

function flipArray(arr){
  var result={};
  for (var i=0; i<arr.length; i++){
    result[arr[i]] = i;
  }
  return result;
}
flipArray(["quick", "brown", "fox"])




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/

function arraysToObject(arr){
  var result = {};
  for (i=0; i<arr.length; i++){
    result[arr[i][0]] = arr[i][1]
  }
  return result;
}
arraysToObject([[2014, "Horse"], [2015, "Sheep"]])



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/

function reverseString(string){
  var result = "";
  for (i=string.length-1; i>=0; i--){
    result+= string[i]
  }
  return result;
}
reverseString("tacocat")




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/

function repeats(string){
  var result = true;
  if (string.length % 2 === 1){
    result = false;
  } else {
    var string1 = "";
    var string2 = "";
    for (i=0; i<string.length; i++){
      if(i<string.length/2){
        string1 += string[i];
      } else {
        string2 += string[i];
      }
    }
    if (string1 === string2){
      result = true
    } else {
      result = false
    }
  }
  return result;
}
repeats('cheesytaco');





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/

function everyOther(string){
  var result="";
  for(i=0; i<string.length; i++){
    if(i%2===0){
      result+=string[i];
    } else {
      result+="";
    }
  }
  return result;
};
everyOther('abcdef');



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/

function allEqual(string){
  var result=true;
  for(i=0; i<string.length-1; i++){
    if (string[i]===string[i+1]){
      result=true;
    } else {
      return false;
    }
  }
  return result;
}
allEqual('arhehxxx');






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 10
*/

function sumLetters(string){
  var result=0;
  for(i=0; i<string.length; i++){
   result+=Number(string[i]);
  }
  return result;
}
sumLetters("45");



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/

function countVowels(string){
  var result=0;
  var vowels='aeiou';
  for (i=0; i<string.length; i++){
    for (c=0; c<vowels.length; c++){
      if(string[i]===vowels[c]){
        result++
      }
    }
  }
  return result;
}
countVowels(poop);


//if(string[i]==='a'||string[i]==='e'||string[i]==='i'||string[i]==='o'||string[i]==='u')




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the built in `split` method
*/

function split(string){
  var result=[]
  for(i=0; i<string.length; i++){
    result.push(string[i])
  }
  return result;
}
split('banana')



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/

function letterMap(string){
  var result={}
  for(i=0; i<string.length; i++){
    result[string[i]]=i
  }
  return result;
}
letterMap(dogpoop)


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/

function letterCount(string){
  var result={}
  for(i=0; i<string.length; i++){
    if(result[string[i]]){
    result[string[i]]++
  } else {
    result[string[i]]=1
  }}
  return result;
}
letterCount('doofus')


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/



function threeOdds(a,b){
  var result=false
  if(b-a<6){
    return result;
  } else if (a%2===1 && b-a<7){
    return result;
  } else {
    result=true
  }
  return result;
}
threeOdds(1,3);






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/

function leftPad(string, num, pad){
  var result=''
  if(num===0){
   return string;
 }
  for(i=0; i<num; i++){
    if(i<num-string.length){
      result+=pad
    } else {
      return result+=string
    }
  }
  return result;
}
leftPad("ggg", 5, "*");




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 2 it should return "bb"
*/

function createString(num,letter){
  var result=""
  for(i=0; i<num; i++){
    result+=letter
  }
  return result;
}
createString(2,"p")



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/

function factorial(num){
  var result=1;
  var total=[];
  for (i=num; i>0; i--){
    total.push(i)
  }
   for (i=0; i<total.length; i++){
     result*=total[i]
    }
  return result;
}
factorial(5);



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/

function arrayOfNumbers(num){
  var result=[];
  for(i=num; i>0; i--){
  result.unshift(i)
  }
  return result;
}
arrayOfNumbers(5);



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/

function evenOdd(num1,num2){
  var result={};
  var big;
  var small;
  if (num1>num2){
    big=num1
    small=num2
  } else {
    big=num2
    small=num1
  }
  for (i=small; i<=big; i++){
    if (num1===0 && num2===0){
      return result;
    } else if (i%2===0){
      result[i]='even'
    } else {
      result[i]='odd'
    }
  }
  return result;
}
evenOdd(9,6)



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/


function growingKeys(num,str){
  var result={};
  var str2=""
  for (i=0; i<num; i++){
    str2+=str
    result[str2]=true
  }
  return result;
}
growingKeys(4,"p")





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/

function every(arr,value) {
  var result = true;
  for (i=0; i<arr.length; i++){
    if (arr[i]!==value){
      return false;
    }
  }
  return result;
}
every([1,2,1],1)





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/

function some(arr,val) {
  var result=false;
  for (i=0; i<arr.length; i++){
    if (arr[i]===val){
      return true;
    }
  }
  return result;
}
some([2,4,5,7],9)


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named toSentence that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/

function toSentence(arr){
  var result="";
  for (i=0; i<arr.length; i++){
    if (i<arr.length-2){
      result+=arr[i]+ ', '
      } else if (i<arr.length-1){
      result+=arr[i]+ ' '
      } else {
      result+="and "+arr[i]
    }
  }
  return result;
}
toSentence(["Phil", "eats", "poops", "leaves"])






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", "Script", "Object", "Notation"] it should return "JSON"
*/

function acronym(arr){
  var result="";
  for( i=0; i<arr.length; i++){
    result+=arr[i][0]
  }
  return result;
}
acronym(["People", "Order", "Our", "Patties"])


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/

function min(arr){
  var result;
  for (i=0; i<arr.length; i++){
  if (i===0 || arr[i]<result){
    result=arr[i]
    }
  }
  return result;
}
min([4,8,72,-9,0])






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/

function index(arr, prop){
  var obj = {}

  for (i=0;i<arr.length;i++){
    obj[arr[i][prop]] = arr[i]
  }

  return obj
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/


function invert(object){
  var obj = {};
  for(var key in object){
    obj[object[key]] = key;
  }
  return obj;
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/

function addSignature(name, obj){
  var obj2 = {};
  for (var key in obj){
    obj2[`${key}-signed`] = `${obj[key]} - ${name}`
  }
  console.log(obj2);
  return obj2;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/









//
