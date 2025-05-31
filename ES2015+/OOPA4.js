class BigCat {
    constructor() {
        this.speed = 5;
        this.strength = 5;
        this.intelligence = 5;
        this.health = 5;
        this.durability = 5;
    }

    is_alive() {
        return this.health > 0;
    }

    printProfile() {
        console.log(`${this.constructor.name} Stats -> Speed: ${this.speed}, Strength: ${this.strength}, Intelligence: ${this.intelligence}, Health: ${this.health}, Durability: ${this.durability}`);
    }
}

class Lion extends BigCat {
    constructor() {
        super();
        this.health = 50;
        this.strength = 50;
    }

    king(bigcat) {
        if (bigcat instanceof Cheetah) {
            let randomNumber = Math.round(Math.random() * 100);

            if (randomNumber <= 60) {
                console.log("The Cheetah escaped unscathed");
                return;
            }
        }

        bigcat.speed = 0;
        bigcat.strength = 0;
        bigcat.intelligence = 0;
        bigcat.health = 0;
        bigcat.durability = 0;
    }
}

class Cheetah extends BigCat {
    constructor() {
        super();
        this.speed = 75;
        this.intelligence = 25;
        this.durability = 25;
        this.health = 30;
        this.strength = 25;
    }

    run(bigcat) {
        if (bigcat instanceof Leopard) {
            bigcat.attack(this);
        } else if (bigcat instanceof Lion) {
            bigcat.king(this);
        }
        if (this.health > 0) {
            bigcat.health -= 20;
            console.log('The Cheetah took 20 health damage while fleeing away');
        }
    }
}

class Leopard extends BigCat {
    constructor() {
        super();
        this.strength = 30;
        this.intelligence = 30;
        this.health = 30;
    }

    attack(bigcat) {
        if (bigcat instanceof Lion) {
            bigcat.king(this);
        } else if (bigcat instanceof Cheetah) {
            let randomNumber = Math.round(Math.random() * 100);

            if (randomNumber <= 60) {
                console.log("The Cheetah escaped unscathed");
                return;
            } else {
                bigcat.health -= 15;
                console.log("The Cheetah was attacked and lost 15 health points");
            }
        } else {
            bigcat.health -= 15;
            console.log("The BigCat was attacked and lost 15 health points");
        }
    }
}

async function battle_royale() {
    const lion = new Lion();
    const leopard = new Leopard();
    const cheetah = new Cheetah();
    const cats = [lion, leopard, cheetah];

    console.log("Welcome to the Royal Rumble!");

    cats.forEach(cat => cat.printProfile());
    console.log("Let the battle begin!!!");

    let round_number = 1;
    while (lion.is_alive() && leopard.is_alive() && cheetah.is_alive()) {
        console.log(`Round ${round_number}`);
        round_number += 1;

        for (const cat of cats) {
            if (cat.is_alive()) {
                const opponents = cats.filter(x => x !== cat && x.is_alive());
                const opponent = opponents[Math.floor(Math.random() * opponents.length)];
                if (cat instanceof Lion) {
                    cat.king(opponent);
                } else if (cat instanceof Cheetah) {
                    cat.run(opponent);
                } else if (cat instanceof Leopard) {
                    cat.attack(opponent);
                }
            }
        }

        // Check if any opponent was defeated
        for (const cat of cats) {
            if (!cat.is_alive()) {
                console.log(`The ${cat.constructor.name} has been defeated`);
            }
        }

        console.log("After round:");
        for (const cat of cats) {
            console.log(`${cat.constructor.name} health: ${cat.health}`);
        }

        // Sleep (cool down) for 1 second
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(1000);
    }

    // Determine the winner
    const winner = cats.find(cat => cat.is_alive());
    console.log(`The winner is the ${winner.constructor.name}!`);
    console.log("The battle is over!");

    // Ask the user if they want to play again
    const play_again = prompt("Want to play again? (y/n): ").toLowerCase();
    if (play_again === "y") {
        battle_royale();
    }
}

// Run the game
battle_royale();








