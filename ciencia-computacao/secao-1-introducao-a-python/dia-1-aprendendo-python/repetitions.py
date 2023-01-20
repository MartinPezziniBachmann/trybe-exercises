languages = ["Python", "Java", "JavaScript"]

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]

languages = ["Python", "Java", "JavaScript"]

for index, language in enumerate(["Python", "Java"]):
    print(f"{index} - {language}")
# Saída:
# 0 - Python
# 1 - Java

# Calcule o fatorial de um número
int_var = 5
fatorial = 1

for num in range(int_var):
    fatorial *= num + 1

print("Fatorial: ", fatorial)

# Ajuste as avaliações
ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)

print("New ratings: ", new_ratings)

# Verifique se é divisível por 3
for num in new_ratings:
    if num % 3 == 0:
        print(f"{num} é divisível por 3")
