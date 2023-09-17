const getSleepHours=(day=>{
  if (day==='monday'){
    return 8;
  }else if (day==='tuesday'){
    return 6;
  }else if (day==='wednesday'){
    return 4;
  }else if (day==='thursday'){
    return 9;
  }else if (day==='friday'){
    return 5;
  }else if (day==='saturday'){
    return 3;
  }else if (day==='sunday'){
    return 4;
  }
})
//console.log(getSleepHours('tuesday'))
const getActualSleepHours=()=>{
  return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday')
}
getActualSleepHours();
console.log(getActualSleepHours())
const getIdealSleepHours=()=>{
  const idealHours=8
  return idealHours*7
}
getIdealSleepHours();
console.log(getIdealSleepHours());

  const idealSleepHours=getIdealSleepHours();
  const actualSleepHours=getActualSleepHours();
const sleepDebt=()=>{
  return idealSleepHours-actualSleepHours
}

let weeksSleep=sleepDebt()
console.log(weeksSleep)

if (actualSleepHours===idealSleepHours){
  console.log('You had a great Sleep this week')
}else if (actualSleepHours>idealSleepHours){
  console.log(`you have overslept by ${weekSleep} hours this week`)
}else if (actualSleepHours<idealSleepHours){
  console.log(`You have a sleep deficit of ${weeksSleep} hours this week`)
}
