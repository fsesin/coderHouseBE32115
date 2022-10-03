"use strict";
exports.__esModule = true;
var Color = /** @class */ (function () {
    function Color() {
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);
        this.color = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
    }
    Color.prototype.getColor = function () {
        console.log(this.color);
    };
    return Color;
}());
var newColor = new Color();
newColor.getColor();
