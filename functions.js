/* Write function which takes array of strings and returns array of numbers.
E.g. getNumbers([‘2’, ‘3’, ‘4’, ‘das’]); // -> [2, 3, 4]*/
//this is govnocode
function toNumbers (input) {
    var result = [];
    var fullArray = input;

    for(var i=0; i<input.length; i++){
        var inputWithNumbers = input.filter(Number);
        if (!isNaN(+input[i])) {
          result.push(+input[i]);
      }

 }
//console.log(input);
  return result;
}
console.log(toNumbers(["2","3","4","das", "vasia", "10", 11, NaN]))


//regex method from string
//var numbers1 =  function (string) {
  //  var numbers = string.match(/\d+/g).map(Number);
    //return numbers;
//  }
  //console.log(numbers1("['dsaadsads', '2', '3']"));

//Write function which takes array of strings and returns SUM of all numeric values.
//E.g. getNumericSum( [‘a’, ‘2’, ‘3’] ); // -> 5
function sumNumbers (input) {
    var result = [];

    for(var i=0; i<input.length; i++){
        var inputWithNumbers = input.filter(Number);
        if (!isNaN(+input[i])) {
          result.push(+input[i]);
      }
       var total = result.reduce(function(a, b) {
        return a + b;
      });
 }
//console.log(input);
  return total;
}
console.log(sumNumbers(["1","2","4", "vasia"]));

//Write function which takes array of elements and returns quantity of it’s unique elements
//E.g. getQuanOfUniqueElements( [2, '3', 3, 2] ); // -> 3
var arr = [2, '3', 3, 2] ;
function getQuanOfUniqueElements(arr) {
    var a = [], b = [], prev;
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return [a, b];
}
var result = getQuanOfUniqueElements(arr);
console.log( result[1].length)

//Write function which takes string and returns quantity of it’s unique characters
//E.g. getQuanOfUniqueCharacters( ‘muahaha’ ); // -> 4

//function getQuanOfUniqueCharacters(){}

function getQuanOfUniqueCharacters(input) {
  var chars = [];
  var result ="";

  for (var i = 0; i < input.length; ++i) {
    if (!(input[i] in chars)) {
      chars[input[i]] = 1;
      result += input[i];
    }
  }
  return result.length;
}

console.log(getQuanOfUniqueCharacters("muahaha")); //

/*Write function which takes array of objects (think of human) in a given format of:
{ name: ‘somename’, age: 35 }
and returns array of names of those people who are older than 65.
E.g getPensionersName( [ {name: ‘Vasya’, age: 13}, {name: ‘Vasiliy’, age: 66} ] // -> [ ‘Vasiliy’ ]*/
function getPensionersName(arrayOfObjects) {
    var arrayOfPensioners = [];
    for (var i = 0; i < arrayOfObjects.length; i++) {
        if (arrayOfObjects[i].age > 65) {
            arrayOfPensioners.push(arrayOfObjects[i].name);
        }
    }
    return arrayOfPensioners;
}
console.log(getPensionersName([{name: 'Vasya', age: 13}, {name: 'Vasiliy', age: 66}, {name: 'Genadiy', age: 19}, {name: 'Genadiy Ivanovich', age: 70} ]));
