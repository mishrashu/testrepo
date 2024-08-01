import './4_1_Interface'

let house: IHouse = {
    houseNumber: 1455,
    area: "Whitefiled",
    pinCode: "560048",
    houseValue: function (value: number): string {
        return "\nHouse value: " + value;
    }
}

console.log("houseNumber: " + house.houseNumber + "\narea: " + house.area + "\npinCode: " + house.pinCode + house.houseValue(22000000));