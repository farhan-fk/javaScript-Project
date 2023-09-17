console.log('hi');
const getUserChoice=(userInput)=>{
  userInput=userInput.toLowerCase();
  if(userInput==='rock' || userInput==='scissors'|| userInput==='paper'){
    return userInput
  }else {
    return 'Invalid input, Please check'
  }
  
}
//this will log user input same as we eneter into parameter
console.log(getUserChoice('Papers'))
const getComputerChoice=()=>{
  const randomNumber=Math.floor(Math.random()*3);
  switch(randomNumber){
  case 0: return 'rock';
  break;
   case 1: return 'paper';
   break;
  case 2: return 'scissors';
    
  }
}
console.log(getComputerChoice());
const determineWinner=(userChoice,computerChoice)=>{
  if (userChoice===computerChoice){
    return 'Its a tie'
  }if (userChoice==='rock'){
    if (computerChoice==='scissors'){
      return 'Congratulations You won.'
    }else {
      return 'Computer Won'
    }
  }if (userChoice==='paper'){
  if(computerChoice==='rock'){
    return 'Congratulations you won'
  }else{
    return 'Computer won'
  }
} if(userChoice==='scissors'){
  if(computerChoice==='paper'){
    return 'Congrratulations you won'
  }else {
    return 'computer jee woon'
  }
}
}
console.log(determineWinner('rock','rock'))
//console.log(determineWinner('paper','scissors'))
//console.log(determineWinner('scissors','rock'))
  
const playGame=()=>{
  const userChoice=getUserChoice('paper')
  const computerChoice=getComputerChoice()
  console.log(`User Entered: ${userChoice}`)
  console.log(`Computer Entered: ${computerChoice}`);
  console.log (determineWinner(userChoice,computerChoice))
}
playGame();
