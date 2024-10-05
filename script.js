// Step 1
console.log("Step 1");
const dice = [4, 6, 8, 10, 100, 12, 20];
console.log("Initial Array = " + dice);
// Step 2
console.log("Step 2");
const dagger = dice[0];
const greatAxe = dice[3];
const attack = dice[dice.length - 1];

console.log(dagger);
console.log(greatAxe);
console.log(attack);

// Step 3
console.log("Step 3");
console.log(dice.length);

// Step 4
console.log("Step 4");
const percentileRoll = dice.slice(3, 5);
console.log(percentileRoll);

const attackDie = dice.pop(dice.length - 1);
console.log(attackDie);
console.log(dice);

dice.push(20);
console.log(dice);

// Step 5
console.log("Step 5");
// Traditional
console.log("Traditional Loop Start");
for (let i = 0; i < dice.length; i++) {
    console.log("A " + "d" + dice[i] + " is a type of dice in a D&D set.");
}
// Modern
console.log("Modern Loop Start");
for (const die of dice) {
    console.log("A " + "d" + die + " is a type of dice in a D&D set.");
}

// Step 6
console.log("Step 6");
const [ daggerDmg, swordDmg, ...rest] = dice;
console.log(daggerDmg);
console.log(swordDmg);
console.log(rest);