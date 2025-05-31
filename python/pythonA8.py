# Part1: fesult of formula

def equation(x, y):
     return (3*x) + (5*y)

print( "The result of the equation is: ", equation(3, 4))



def calculate_pay(hours_worked, hourly_rate):
    if hours_worked <= 40:
        regular_pay = hours_worked * hourly_rate
        overtime_pay = 0
        total_pay = regular_pay
    else:
        regular_pay = 40 * hourly_rate
        overtime_hours = hours_worked - 40
        overtime_pay = overtime_hours * (hourly_rate * 1.5)
        total_pay = regular_pay + overtime_pay

    print("Regular Pay", regular_pay)
    print("Overtime Pay", overtime_pay)
    print("Total Pay", total_pay)

# User input
hours = int(input("Enter hours worked: "))
rate = int(input("Enter hourly pay rate: "))

calculate_pay(hours, rate)
# Output