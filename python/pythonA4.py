import random

# Generate a random number between 1 and 10
random_number = random.randint(1, 10)

while True:
    guess = int(input("Guess a number between 1 and 10: "))
    if guess > random_number:
        print("The number is too big, guess again.")
    elif guess < random_number:
        print("The number is too small, guess again.")
    else:
        print("Congratulations! You guessed the correct number.")
        break # Exit the loop