import random


user_choice = input("Enter a number (1=Rock, 2=Paper, 3=Scissors): ")
computer_choice = random.randint(1, 3)
choices = {1: "Rock", 2: "Paper", 3: "Scissors"}

print(f"User choice: {choices[int(user_choice)]}")
print(f"Computer choice: {choices[computer_choice]}")


if (user_choice == 1 and computer_choice == 3) or\
     (user_choice == 2 and computer_choice == 1) or\
     (user_choice == 3 and computer_choice == 2):
    print("You win!")
elif (user_choice == 3 and computer_choice == 1) or\
     (user_choice == 2 and computer_choice == 3) or\
     (user_choice == 1 and computer_choice == 2):
    print("You lose!")
else:
    print("It's a tie!")