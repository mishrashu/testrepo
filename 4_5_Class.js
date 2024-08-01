"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./4_1_Interface");
var House = /** @class */ (function () {
    function House(houseNumber, area, pinCode) {
        var _this = this;
        this.houseValue = function (value) {
            console.log("houseNumber: " + _this.houseNumber);
            console.log("area: " + _this.area);
            console.log("pinCode: " + _this.pinCode);
            return "House value: " + value;
        };
        this.houseNumber = houseNumber;
        this.area = area;
        this.pinCode = pinCode;
    }
    return House;
}());
var obj = new House(1454, "Whitefield, Seetharampalya", "560048");
console.log(obj.houseValue(23000000));
