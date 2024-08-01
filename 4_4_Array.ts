interface INumberArray {
    [index:number]:number;
}

let numberArray : INumberArray = [24, 32, 56];

console.log("numberArray[0]: " + numberArray[0]);
console.log("numberArray[1]: " + numberArray[1]);
console.log("numberArray[2]: " + numberArray[2]);

interface IStringArray {
    [index:string]:string;
}

let stringArray : IStringArray = {};

stringArray["TS"] = "Typescript";
stringArray["JS"] = "Javascript";

console.log("stringArray[\"TS\"]: " + stringArray["TS"]);
console.log("stringArray[\"JS\"]: " + stringArray["JS"]);
