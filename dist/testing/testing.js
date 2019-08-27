/*
var input = 15;
//var input = Number(prompt("type"));
//function DecToHex(){}
//!WORKS
hexString = input.toString(16);
console.log(hexString);


//!WORKS
//function BinaryToDec(){}
decString = Number.parseInt(input, 2);
console.log(decString);

//!WORKS
//function HexToDec(){}
decString2 = Number.parseInt(input, 16);
console.log(decString2);


//!WORKS
//function DecToBin(){}
decString3 = input.toString(2);
console.log(decString3);
/*
  const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ];

  var rem = 0;

  var results = "";

  while (num > 0) {
    rem = num % 16;
    results = hex[rem] + results;
    num = num / 16;

    alert(results);
    console.log(results);

    break;
  }
}
*/
function dectobin() {
  var string = "";
  var input = 3456;
  while (input > 0) {
    string = (input % 2) + string;
    input = Math.floor(input / 2);
  }
  console.log(string);
}
dectobin();