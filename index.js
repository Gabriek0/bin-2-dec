function binToDec() {
  let binaryNumber = document.getElementById("inputNumber").value;
  let showingBinaryNumber = document.getElementById("showingBinaryNumber");

  let Dec = 0;

  if (binaryNumber.length > 8) {
    alert("The number of numbers entered by the user is greater than 8");

    return;
  }

  for (i = 0; i < binaryNumber.length; i++) {
    if (binaryNumber[i] != 0 && binaryNumber[i] != 1) {
      alert("The number is different from 0 and 1.");

      return;
    }
  }

  for (let i = 0; i < binaryNumber.length; i++) {
    if (binaryNumber[binaryNumber.length - (i + 1)] === "1") {
      Dec += 2 ** i;
    }
  }

  showingBinaryNumber.value = Dec;

}
