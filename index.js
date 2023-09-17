import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.yellowBright('My Quiz Game'));
const question = [
    {
        type: "input",
        name: "GameLaunchDate",
        message: "In Which Years The Free Fire Launch",
        validate: (input) => input === 2017
    },
    {
        type: "input",
        name: "PopulerGame",
        message: "Most Populer Game In 2019",
        validate: (input) => input.toLowerCase() === "Free Fire"
    },
    {
        type: "input",
        name: "WatchingLiveStream",
        message: "Most Watching Live Stream Channel In Whole Free Fire Comunity",
        validate: (input) => input.toLowerCase() === "FreeFire IndiaEsoprts"
    }
];
const anwers = await inquirer.prompt(question);
let score = 10;
for (const key in anwers) {
    if (anwers[key] === true) {
        score++;
    }
}
console.log(`You got ${score} out of ${question} your question is correct`);
