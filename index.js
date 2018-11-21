// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(e) {
    console.log(e.name);
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (e) {
    if (e.hometown === hometown) {
      console.log(e.name);
    }
  })
}


const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
