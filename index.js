const rs = require('readline-sync');

//[x] prompt name question
//[x] prompt fav hobby
// ask if there's more hobbies
// add hobbies to list
// store list of users hobbies
// print user hobby list aat the end

const hobbies = [];

const userName = rs.question('What is your name? ');
const favHobby = rs.question(`${userName}, What is your favourite hobby? `);

hobbies.push(favHobby);

const moreHobbies = rs.questionInt(`How many other hobbies do you have? `);

if (moreHobbies > 0) {
  let counter = 0;
  while (counter < moreHobbies) {
    let input = rs.prompt();
    hobbies.push(input);
    counter++;

    if (counter < moreHobbies) {
      console.log(
        `-- Awesome! "${input}" is cool! What's the other ${moreHobbies - counter}? `
      );
    } else {
      console.log(`I wish I could do ${hobbies} ...but I'm not even real`);
    }
  }
  // add hobbies
} else {
  const areYouSure = rs.keyInYN(`Are you sure? ${hobbies[0]} is all you like to do? `);
}
console.log(hobbies);
