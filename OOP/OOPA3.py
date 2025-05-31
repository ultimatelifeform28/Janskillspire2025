import random

class Person:
    def __init__(self, name, id_number):
        self.name = name
        self.id_number = id_number  

# Display the prerson's name and id_number
    def display(self):
        print(f"Name: {self.name}\nID Number: {self.id_number}")

# Create a subclass of Person called Employee
class Employee(Person):
    def __init__(self, name, id_number, salary, position):
        super().__init__(name, id_number)
        self.position = position
        self.salary = salary

 # Create a person object  
person = Person("Jacorey", 12345)
person.display()
 # Create an employee object    
employee = Employee("Jacorey", 12345, 50000, "Full Stack Engineer")
employee.display()
print(f"Position: {employee.position}\nSalary: {employee.salary}")      