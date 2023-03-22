# Exemplo 1:
produtos_1 = [1, 3, 1, 1, 2, 3]
resultado_1 = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
produtos_2 = [1, 1, 2, 3]
resultado_2 = 1
# Os índices (0, 1) formam a única combinação.


def verifica_combinações(lista):
    combinacoes = 0
    for i in range(len(lista)):
        for j in range(i + 1, len(lista)):
            if lista[i] == lista[j]:
                combinacoes += 1
    return combinacoes


assert resultado_1 == verifica_combinações(produtos_1)

assert resultado_2 == verifica_combinações(produtos_2)
