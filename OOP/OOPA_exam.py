import random

'''Question 1: Temperature Conversion'''
# input user current temperature in Fahrenheit
fahrenheit = float(input("Enter the temperature in Fahrenheit: "))
# convert to Celsius
celsius = (fahrenheit - 32) * 5.0/9.0
# Display the temperature in Celsius
print(f"Temperature: {fahrenheit} Fahrenheit = {celsius} Celsius")

'''Question 2: Genreate Random Numbers'''
# Generate a random number between 1 and 100
def generate_random_number():
	return random.randint(1, 100)

# Call the function and print the result
print(f"Random number: {generate_random_number()}")

'''Question 3: OOP game'''

class Human:
    name = 3
    strength = 3
    intelligence = 3
    health = 100
    dexterity = 3
    
    def __init__(self, name, strength, intelligence, health, dexterity):
        self.name = name
        self.strength = strength
        self.intelligence = intelligence
        self.health = health
        self.dexterity = dexterity

    def printProfile(self):
        print(f"Profile: Name: {self.name}, Strength: {self.strength}, Intelligence: {self.intelligence}, Health: {self.health}, Dexterity: {self.dexterity}")
        
    def attack(self, other_human):
        #== Human attacks another human == #
        if isinstance(other_human, Human):
            damage = 5 * self.strength 
            other_human.health -= damage
            print(f"{self.name} attacked {other_human.name} for {damage} damage!")
            print(f"{other_human.name} has {other_human.health} health remaining.")

class Ninja (Human):
    def __init__(self, name, strength, intelligence, health, dexterity, magic):
        super().__init__(name, strength, intelligence, health, 175)
    
    def steal(self, other_human):
        #== Ninja steal techinque invoked ==#
        if isinstance(other_human, Human):
            other_human.health -= 10
            self.health += 10
            print(f"{self.name} stole 10 health from {other_human.name}!")
            print(f"{self.name} now has {self.health} health.")
    
    def get_away(self):
        #== Ninja get away techinque invoked ==#
        self.health -= 15
        print(f"{self.name} got away and lost 15 health.")
        print(f"{self.name} now has {self.health} health.")
            

class Wizard (Human):
    def __init__(self, name, strength, intelligence, health, dexterity, magic):
        super().__init__(name, strength, 25, 50, dexterity)
    
    def heal(self, other_human):
         #== Wizard healing spell invoked == #
        if isinstance(other_human, Human):
            other_human.health += 10 * self.intelligence 
            print(f"{self.name} healed {other_human.name} for 10 health!")

            
    def fireball(self, other_human):
        #== Wizard fireball spell invoked == #
        if isinstance(other_human, Human):
            damage = random.randint(20, 50)
            other_human.health -= damage
            print(f"{self.name} cast fireball on {other_human.name} for {damage} damage!")
            print(f"{other_human.name} has {other_human.health} health remaining.")

class Samurai (Human):
    def __init__(self, name, strength, intelligence, health, dexterity, magic):
        super().__init__(name, strength, intelligence, 200, dexterity)
    
    def death_blow(self, other_human):
        # == Samurai death blow invoked ==#
        if isinstance(other_human, Human):
            if other_human.health < 50:
                other_human.health = 0
                print(f"{self.name} dealt a death blow to {other_human.name}!")
            
        
    def meditate(self):
        # == Samurai meditate invoked ==# 
        self.health = 200
        print(f"{self.name} meditated and heatlh is fully restored {self.health} health!")



       
		




	
	


