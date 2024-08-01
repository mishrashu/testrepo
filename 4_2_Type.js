"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./4_1_Interface");
var house = {
    houseNumber: 1455,
    area: "Whitefiled",
    pinCode: "560048",
    houseValue: function (value) {
        return "\nHouse value: " + value;
    }
};
console.log("houseNumber: " + house.houseNumber + "\narea: " + house.area + "\npinCode: " + house.pinCode + house.houseValue(22000000));
