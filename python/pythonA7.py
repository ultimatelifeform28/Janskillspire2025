units_sold =int (input("Enter the number of units sold: "))

total_cost = units_sold * 99

if units_sold >= 10 and units_sold <= 19:
    discount = total_cost * 0.2
elif units_sold >= 20 and units_sold <= 49:
    discount = total_cost * 0.3
elif units_sold >= 50 and units_sold <= 99:
    discount = total_cost * 0.4
elif units_sold >= 100:
    discount = total_cost * 0.5


    print(f"Total cost: ${total_cost}")


