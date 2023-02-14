import random


def generate_random_list(n):
    hundred_numbers = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average / n
        hundred_numbers.append(average)


# Complexidade O(n), pois ignora o laço constante
