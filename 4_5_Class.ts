import './4_1_Interface'
class House implements IHouse {
    houseNumber: number;
    area: string;
    pinCode: string;

    constructor(houseNumber: number, area: string, pinCode: string) {
        this.houseNumber = houseNumber;
        this.area = area;
        this.pinCode = pinCode;
    }
    houseValue = (value: number) : string => {
        console.log("houseNumber: " + this.houseNumber );
        console.log("area: " + this.area );
        console.log("pinCode: " + this.pinCode );
        return "House value: " + value;
    }
}

var obj = new House(1454,"Whitefield, Seetharampalya","560048");
console.log(obj.houseValue(23000000));