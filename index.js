// Code your solution in this file!



const returnFirstTwoDrivers = function (drivers){ 
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers){
  return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
  function multiplier(fare){ 
    return fare*5
  }; 
  return multiplier
}

const fareDoubler = (fare) => fare*2 
const fareTripler = (fare) => fare*3

const selectDifferentDrivers = (drivers, selected) => {

  if (selected === returnFirstTwoDrivers) {
      return drivers.slice(0 , 2)
    } else {
      return drivers.slice(2)
  };
}
