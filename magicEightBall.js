const userName='Farhan';
userName? console.log(`Hello ${userName}!`):console.log (`Hello!`)
let userQuestion='Will my share proces will go up this month??'
console.log(`${userName} asks: ${userQuestion}`)
const randomNumber=Math.floor(Math.random()*8)
const eightBall=''
switch (randomNumber){
  case 0:console.log('Magic Eigt ball Says: It is certain');
  break;
  case 1:console.log('Magic Eigt ball Says: It is decidely so');
  break;
  case 2:console.log('Magic Eigt ball Says: Reply Hazy try again');
  break;
  case 3:console.log('Magic Eigt ball Says:Cannot predivt now');
  break;
  case 4:console.log('Magic Eigt ball Says: My sources say no');
  break;
  case 5:console.log('Magic Eigt ball Says: Outlook not so good');
  break;
  case 6: console.log(`Magic Eigt ball Says: Do not count on it`);
  break;
  case 7:console.log('Magic Eigt ball Says: Signs point to yes')
}
