// // Code your solutions in this file

function printBadges(badges) {
  for(i = badges.length; i > 0; i--){
      console.log(`Welcome ${badges[i-1]}! You are employee #${i}.`)
  }
  return badges
}

function tailsNeverFails(){
  let tails = 0;
  while (Math.random() >= 0.5) {
    tails++;
  }
  return `You got ${tails} tails in a row!`
};
