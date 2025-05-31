import random

rolled_number = 0
attempts = 0
user_input = input("Enter a number between 1 and 6: ")

if rolled_number != user_input:
    rolled_number = random.randint(1, 6)
    attempts += 1
    print(f"Attempt {attempts}: {rolled_number}")

