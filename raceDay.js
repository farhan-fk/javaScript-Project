let raceNumber = Math.floor(Math.random() * 1000);

let registerEarly= true;
let runnerAge=18;
if (runnerAge>18 && registerEarly){
  raceNumber=raceNumber+1000
  
}if (runnerAge>18 && registerEarly) {
  console.log(`Race will begin at 9:30 am and your race number 
is:${raceNumber}`)
} else if(runnerAge>18 && !registerEarly){console.log(`Race will begin at 
11 am and your race Number is: ${raceNumber}` )
} else if (runnerAge<18){
  console.log(`Your Race will begin at 12:30 pm and your race number 
is:${raceNumber}`)
} else {
  console.log('PLz contact registration desk')
}
