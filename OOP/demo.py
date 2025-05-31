class Car:


    def __init__(self, make,model,cost,year):
        self.make = make
        self.model = model
        self.cost = cost
        self.year = year

cyberTruck1 = Car("Tesla","Cybertruck",80000,2021)
cyberTruck2 = Car('Tesla','Cybertruck',80000,2021)
cyberTruck3 = Car("Tesla","Cybertruck",80000,2021)

cyberTruck1.printSpecs()
