import random


class Boxer:
    def __init__(self,height,weight, win,losses,draws):
        self.height = height
        self.weight = weight
        self.win = win
        self.losses = losses
        self.draws = draws

    def printProfile(self):
        print(f"Profile: height: {self.height}, Weight: {self.weight}, Wins: {self.win}, Losses: {self.losses}, Draws: {self.draws}")

    def printWinLossDrawsAverage(self):
        total = self.win + self.losses + self.draws
        average = total / 3
        print(f"Average: {average}")

jacorey= Boxer("5'6", "160", 20, 0,0)
edumdo = Boxer("5'8", "161", 20, 2,1)

jacorey.printProfile()
edumdo.printProfile()

choice = input("Which boxer would you like to bet on? Jacorey or Edumdo?")

if choice == "jacorey":
    print("Jacorey is a great choice!")
    print("Here are his stats:")
    print(f"Profile: height: {jacorey.height}, Weight: {jacorey.weight}, Wins: {jacorey.win}, Losses: {jacorey.losses}, Draws: {jacorey.draws}")
    if jacorey.win > edumdo.win and jacorey.losses < edumdo.losses:
        print("Congratulations! You win your bet.")
    else:
        print("Sorry, you lose your bet.")
elif choice == "edumdo":
    print("Edumdo is a great choice!")
    print("Here are his stats:")
    print(f"Profile: height: {edumdo.height}, Weight: {edumdo.weight}, Wins: {edumdo.win}, Losses: {edumdo.losses}, Draws: {edumdo.draws}")
    if edumdo.win > jacorey.win and edumdo.losses < jacorey.losses:
        print("Congratulations! You win your bet.")
    else:
        print("Sorry, you lose your bet.")


