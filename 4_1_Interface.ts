interface IHouse {
    houseNumber: number;
    area: string;
    pinCode: string;
    houseValue: (value: number) => string;
}