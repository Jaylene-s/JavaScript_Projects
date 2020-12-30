/* sleep debt calculator:calculate if you’re getting enough sleep each week. The program will determine the actual and ideal hours of sleep for each night of the last week. Finally, it will calculate, in hours, how far you are from your weekly sleep goal. */

//Step 1: create a function that returns any given night’s number of hours of rest
const getSleepHours = day => {
  switch (day) {
    case 'monday':
    return 8;
    case 'tuesday':
    return 8;
    case 'wednesday':
    return 8;
    case 'thursday':
    return 8;
    case 'friday':
    return 8;
    case 'saturday':
    return 8;
    case 'sunday':
    return 8;
  }
};
// test switch console.log(getSleepHours('tuesday'));
/* Get the total sleep hours that you actually slept
Get the ideal sleep hours that you prefer
Calculate the sleep debt, if any.*/
const getActualSleepHours = () => //the sum of all sleep hours in the week
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 
getActualSleepHours();
const getIdealSleepHours = () => {  //ideal sleep hours you prefer
  const idealHours=7.5;
  return idealHours * 7; 
};
//test console.log(getActualSleepHours());
//console.log(getIdealSleepHours());
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours= getIdealSleepHours();
/* If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.*/
if (actualSleepHours===idealSleepHours) {
  console.log ('You got the perfect amount of sleep!');
} else if (actualSleepHours >idealSleepHours) {
  console.log ('You got ' + (actualSleepHours-idealSleepHours) + ' hours more sleep than you needed this week!');
} else {
  console.log ('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.'); 
}
};
calculateSleepDebt(); //start the program by calling function

