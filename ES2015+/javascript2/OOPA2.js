class Boxer {
    constructor(height, weight, wins, losses) {
        this.height = height;
        this.weight = weight;
        this.wins = wins;
        this.losses = losses;
    }

    printBoxerInfo() {
        console.log(`Height: ${this.height} Weight: ${this.weight} Wins: ${this.wins} Losses: ${this.losses}`);
    }

    calculateBoxerStat() {
        return this.wins / (this.wins + this.losses);
    }
}

const boxer1 = new Boxer(6.2, 200, 30, 5);
const boxer2 = new Boxer(5.9, 180, 25, 10);

console.log("*******Boxer1*******");
boxer1.printBoxerInfo();
console.log("*********************");

console.log("*******Boxer2*******");
boxer2.printBoxerInfo();
console.log("*********************");

const user_selection = prompt('Enter the name of the boxer you would like to bet on: boxer1 or boxer2');


let winningPercentage;
if (user_selection === 'boxer1') {
    winningPercentage = boxer1.calculateBoxerStat();
    console.log(`Winning Percentage of Boxer1: ${winningPercentage}`);
} else if (user_selection === 'boxer2') {
    winningPercentage = boxer2.calculateBoxerStat();
    console.log(`Winning Percentage of Boxer2: ${winningPercentage}`);
} else {
    console.log('Invalid selection');
}


