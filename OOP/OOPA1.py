class Car:
    top_speed = "370 km/h"
    location = 0

    def printTopSpeed(self):
        print("Top Speed: ", self.top_speed)

    def drive(self):
        self.location += 10

    def stop(self):
        print("Car stopped at location: ", self.location)

my_car = Car() 

my_car.drive()
my_car.drive()
my_car.drive()
my_car.stop()
my_car.printTopSpeed()
