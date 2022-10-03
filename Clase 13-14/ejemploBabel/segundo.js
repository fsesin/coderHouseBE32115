"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

var numAlCuadrado = function numAlCuadrado(array) {
  array.forEach(function (num) {
    return Math.pow(num, 2);
  });
};

var PORT = 3000;
app.listen(PORT, function () {
  console.log("Escuchando al puerto ".concat(PORT));
});
