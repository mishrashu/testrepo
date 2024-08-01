interface INewHouse {
    (value:number):number;
}

function enquireHouseValue(value:number){
    return value;
}

let HouseDetails = enquireHouseValue;

console.log("House valie is " + enquireHouseValue(22000000));