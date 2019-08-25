
function DecToHex() {
  var DtH_input = parseInt(document.getElementById("num").value);
  var hexString = DtH_input.toString(16);
  alert(hexString);
  console.log(hexString);
}

function DecToBin() {
  var DtB_input = parseInt(document.getElementById("num").value);
  decString3 = DtB_input.toString(2);
  console.log(decString3);
  alert(decString3);
}

function BinaryToDec() {
  var BtD_input = parseInt(document.getElementById("num").value);  
    decString = Number.parseInt(BtD_input, 2);
    console.log(decString);
    alert(decString);  
}

function HexToDec() {
  var HtD_input = (document.getElementById("num").value);
  decString2 = Number.parseInt(HtD_input, 16);
  console.log(decString2);
  alert(decString2);
}


