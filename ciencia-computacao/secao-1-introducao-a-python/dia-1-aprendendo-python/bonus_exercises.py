def min_element(list):
    return min(list)


print(min_element([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))


def draw_triangle(size):
    for row in range(1, size + 1):
        print(row * "*")


draw_triangle(5)


def summation(n):
    total = 0
    for num in range(1, n + 1):
        total += num
    return total


print(summation(5))


def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total


print(fuel_price("G", 20))
