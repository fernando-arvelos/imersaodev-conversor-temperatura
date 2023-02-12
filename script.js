function ConverterCF() {
  var celsius = parseFloat(document.getElementById("valor").value);
  var resultadoCF = celsius * 1.8 + 32;
  document.getElementById("valorConvertido").innerHTML =
    celsius + "°C" + " = " + `${resultadoCF.toFixed(2)}` + "°F";
}

function ConverterFC() {
  var fahrenheit = parseFloat(document.getElementById("valor").value);
  var resultadoFC = (fahrenheit - 32) / 1.8;
  document.getElementById("valorConvertido").innerHTML =
    fahrenheit + "°F" + " = " + `${resultadoFC.toFixed(2)}` + "°C";
}

function ConverterCK() {
  var celsius = parseFloat(document.getElementById("valor").value);
  var resultadoCK = celsius + 273.15;
  document.getElementById("valorConvertido").innerHTML =
    celsius + "°C" + " = " + `${resultadoCK.toFixed(2)}` + "°K";
}

function ConverterKC() {
  var kelvin = parseFloat(document.getElementById("valor").value);
  var resultadoKC = kelvin - 273.15;
  document.getElementById("valorConvertido").innerHTML =
    kelvin + "°K" + " = " + `${resultadoKC.toFixed(2)}` + "°C";
}

function ConverterFK() {
  var fahrenheit = parseFloat(document.getElementById("valor").value);
  var resultadoFK = (fahrenheit - 32) / 1.8 + 273.15;
  document.getElementById("valorConvertido").innerHTML =
    fahrenheit + "°F" + " = " + `${resultadoFK.toFixed(2)}` + "°K";
}

function ConverterKF() {
  var kelvin = parseFloat(document.getElementById("valor").value);
  var resultadoKF = (kelvin - 273.15) * 1.8 + 32;
  document.getElementById("valorConvertido").innerHTML =
    kelvin + "°K" + " = " + `${resultadoKF.toFixed(2)}` + "°F";
}
