def higher(x, y):
    """Retorna o valor mais alto"""
    if x > y:
        return x
    else:
        return y


print(higher(10, 5))


def average(list):
    """Retorna a média dos valores de uma lista"""
    sum = 0
    for num in list:
        sum += num
    return sum / len(list)


print(average([1, 2, 3]))


def square(n):
    """Desenha um quadrado de lados n"""
    for el in range(n):
        print(n * "*")


square(4)


def lengthier(list):
    """Retorna o nome mais longo"""
    lenghtier_name = ""
    for name in list:
        if len(name) > len(lenghtier_name):
            lenghtier_name = name
    return lenghtier_name


print(lengthier(["Maria", "Rogério", "Jon"]))


def paint_costs(area):
    """Calcula o preço de uma pintura"""
    can_price = 80
    required_litters = area / 3
    required_cans = required_litters // 18
    if required_litters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


print(paint_costs(90))


def triangle_area(x, y, z):
    if (x + y <= z) or (x + z <= y) or (z + y <= x):
        return print("Não é um triângulo")
    if x == y == z:
        print("Triângulo Equilátero: três lados iguais")
    elif x == y or x == z or z == y:
        print("Triângulo Isóceles: dois lados iguais")
    else:
        print("Triângulo Escaleno: todos os lados diferentes")


triangle_area(3, 3, 3)
