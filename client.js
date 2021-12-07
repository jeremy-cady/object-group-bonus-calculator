const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function calculateBonus(employee) {
  let employeeComp = {
    name: employee.name,
  };
  if(employee.reviewRating<=2) {
    employeeComp.bonusPercentage = 0;
  }
  else if (employee.reviewRating===3) {
    employeeComp.bonusPercentage = .04;
  }
  else if (employee.reviewRating===4) {
    employeeComp.bonusPercentage = .06;
  }
  else if (employee.reviewRating===5) {
    employeeComp.bonusPercentage = .10;
  }
  if(employee.employeeNumber.length===4) {
    employeeComp.bonusPercentage += .05;
  }
  if(Number(employee.annualSalary)>65000) {
    employeeComp.bonusPercentage = .01;
  }
  if(employeeComp.bonusPercentage>.13) {
    employeeComp.bonusPercentage = .13;
  }
  if(employeeComp.bonusPercentage<0) {
    employeeComp.bonusPercentage = 0;
  }
   
  employeeComp.totalBonus = Math.ceil(employeeComp.bonusPercentage*Number(employee.annualSalary)),
  employeeComp.totalCompensation = Number(employee.annualSalary) + employeeComp.totalBonus
  

  return employeeComp;
}

//let c=calculateBonus(employees[0]);

//console.log(c);

for (let employee of employees) {
  console.log(calculateBonus(employee));

}

