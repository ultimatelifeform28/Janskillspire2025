import random
import time


class BigCat:
    speed = 5
    strength = 5
    intelligence = 5
    health = 5
    durability = 5

    def __init__(self, speed, strength, intelligence, health, durability):
        self.speed = speed
        self.strength = strength
        self.intelligence = intelligence
        self.health = health
        self.durability = durability

    def printProfile(self):
        """Prints the profile of the BigCat"""
        print(f"Profile: speed: {self.speed}, strength: {self.strength}, intelligence: {self.intelligence}, health: {self.health}, durability: {self.durability}")

    def is_alive(self):
        """Checks if the BigCat is still alive"""
        return self.health > 0

class Lion(BigCat):
    def __init__(self, speed, strength, intelligence, health, durability):
        super().__init__(speed, 50, intelligence, 50, durability) 

    def king(self, other_cat):
        """IF other_cat is a cheetah, has a 60% chance of escapes, otherwise deletes all attributes of other_cat"""
        if isinstance(other_cat, Cheetah):
            if random.randint(1, 10) <= 6:
                print("The Cheetah has escaped unscathed!")
                return
            other_cat.speed = 0
            other_cat.strength = 0
            other_cat.intelligence = 0
            other_cat.health = 0
            other_cat.durability = 0
            print("The Lion has defeated its prey!")

class Leopard(BigCat):
    def __init__(self, speed, strength, intelligence, health, durability):
        super().__init__(speed, 30, 30, 30, durability) 

    def attack(self, other_cat):
        """If Leopard attacks a Big_Cat hostile """
        if isinstance(other_cat, Lion): 
            pass
        other_cat.king
        if isinstance(other_cat, Cheetah):
            if random.randint(1, 10) <= 6:
                print("The Leopard dodges, and escapes with 60% chance!")
            else:
                print( " The Leopard takes minor 15 Damage")
                other_cat.health -= 15

class Cheetah(BigCat):
    def __init__(self, speed, strength, intelligence, health, durability):
        super().__init__(75, 25, 25, 25, 25)

    def run(self, other_cat):
        """Cheetah runs away from BigCat and reacts to the BigCat"""
        if isinstance(other_cat, Leopard):
            print("The Cheetah crictal atacks the Leopard dealing major damage !")
        elif isinstance(other_cat, Lion):
            print("The Cheetah runs away from the Lion but take 20 Damage!")


#== Game Logic ==#
def battle_royale():            
    lion = Lion(50, 50, 50, 50, 50)
    leopard = Leopard(30, 30, 30, 30, 30)
    cheetah = Cheetah(75, 25, 25, 25, 25)
    cat = [lion, leopard, cheetah]

    print("Welcome to the Royal Rumble!")
    for cat in cat:
        cat.printProfile()
        print("\nlet the battle begin\n")

    round_number = 12
    while lion.is_alive() and leopard.is_alive() and cheetah.is_alive():
        print(f"Round {round_number}")
        round_number += 1

        for cat in cat:
            if cat.is_alive():
                opponent = random.choice([x for x in cat if x != cat])
                if isinstance(cat, Lion):      
                    cat.attack(opponent)
                elif isinstance(cat, Cheetah):
                    cat.run(opponent)

        # Check if opponent was defeated 
        if not opponent.is_alive():
            print("The opponent has been defeated")

            time.sleep(1) # Sleep (cool down) for 1 second

            round_number += 12  # advance to the next round

    # Determine the winner
    winner = [cat for cat in cat if cat.is_alive()][0]
    print(f"The winner is the {winner.__class__.__name__}!")
    print("The battle is over!")

    # Ask the user if they want to play again
    play_again = input("Want to play again? (y/n): ").lower()
    if play_again != "y":
        return

# Run the game 
battle_royale()











