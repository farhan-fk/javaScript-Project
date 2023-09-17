const team={
  _players:[
  {firstName:'Farhan',lastName:'Khan',age:24}, 
{firstName:'Nauren',lastName:'Khan',age:20},
  {firstName:'Mysha',lastName:'Khan',age:11}
],
  _games:[
  
{opponent:'',teamPoints:8,opponentPoints:4},{opponent:'',teamPoints:8,opponentPoints:4},{opponent:'',teamPoints:8,opponentPoints:4}],
  get players(){
    return this._players
  },
  get games(){
    return this._games
  },
  addPlayer(newFirstName,newLastName,newAge){
    let player={
      firstName:newFirstName,lastName:newLastName,age:newAge};
  
 return this.players.push(player);
    },
    addGame(newOpponent,newTeamPoints,newOpponentPoints){
      let game={
       
opponent:newOpponent,teamPoints:newTeamPoints,opponentPoints:newOpponentPoints
      };
      return this.games.push(game)
    }
    
  }
  
  
  team.addPlayer('Bugs','Bunny',76);
  team.addGame('Titans',100,80)
  console.log(team._players)
  console.log(team._games)
