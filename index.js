
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(myArray) {
    return myArray.slice(0,2);
}

const returnLastTwoDrivers = function(myArray) {
    return myArray.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(myInt) {
    return function(myFare) {
        return myFare * myInt ;
    }
}

const fareDoubler = createFareMultiplier(2); 

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, myFunc) {
    arrayOfDrivers = myFunc(arrayOfDrivers);
    return arrayOfDrivers;
}

selectDifferentDrivers(drivers, returnFirstTwoDrivers); 
selectDifferentDrivers(drivers, returnLastTwoDrivers);


