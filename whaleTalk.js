
const vowels=['a','e','i','o','u'];
let resultArray=[]
for (let inputIndex=0; inputIndex<input.length; inputIndex++){
  //console.log('input index is '+ inputIndex);
  if (input[inputIndex]==='e'){
    resultArray.push(input[inputIndex])
  } if(input[inputIndex]==='u'){
    resultArray.push(input[inputIndex])
  }
  for (vindex=0;vindex<vowels.length;vindex++){
    //console.log(`vindex is ${vindex}`);
    if (input[inputIndex]===vowels[vindex]){
      resultArray.push(input[inputIndex]);
      
      }
      
    }
  }
//console.log(resultArray)
const resultString= resultArray.join('').toUpperCase()
console.log(resultString)
