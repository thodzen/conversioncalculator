
function DecToHex() {
  var DtH_input = parseInt(document.getElementById("num").value);
  var hexString = DtH_input.toString(16);
  document.getElementById("answer").innerHTML = hexString;
  console.log(hexString);
}

function DecToBin() {
  var DtB_input = parseInt(document.getElementById("num").value);
  decString3 = DtB_input.toString(2);
  document.getElementById("answer").innerHTML = decString3;
  console.log(decString3);
}

function BinaryToDec() {
  var BtD_input = parseInt(document.getElementById("num").value);  
    decString = Number.parseInt(BtD_input, 2);
    document.getElementById("answer").innerHTML = decString;
    console.log(decString);
}

function HexToDec() {
  var HtD_input = (document.getElementById("num").value);
  decString2 = Number.parseInt(HtD_input, 16);
  document.getElementById("answer").innerHTML = decString2;
  console.log(decString2);
}


