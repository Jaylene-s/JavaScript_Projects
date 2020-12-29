//Write a program that will register runners for the race and give them instructions on race day.

let raceNumber = Math.floor(Math.random() * 1000); //whole numbers from 0 to 999
const registeredEarly = false; //indicates whether a runner registered early or not.
const age=18;
//control flow statement that checks whether the runner is an adult AND registered early.Add 1000 to their raceNumber if this is true.
if(age >18 && registeredEarly===true) {
  raceNumber += 1000;
}
//control flow to check age and registration time to determine race time. For runners over 18 who registered early, log a statement telling them that they will race at 9:30 am. Include their raceNumber.
if(age >18 && registeredEarly===true){
  console.log(`Race will begin at 9:30 am, your race number is: ${raceNumber}.`);
}
  //else if runner is over 18 AND did not register early they will race at 11:00am. Include their raceNumber
  else if(age >18 && registeredEarly===false){
    console.log(`Race will begin at 11:00 am, your race number is: ${raceNumber}.`);
  }
  //For people under 18, log a statement telling them that they will race at 12:30 pm. Include raceNumber
  else if(age <18) {
    console.log(`Race will begin at 12:30 pm, your race number is: ${raceNumber}.`);
  }
  else{
    console.log(`Please see the registration desk thanks!`);
  }
