entradas = [1, 2, 3]
saidas = [3, 2, 7]
instante_buscado = 4
resultado = 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.


def verificar_presentes(entradas, saidas, instante):
    presentes = 0
    for i in range(len(entradas)):
        if entradas[i] <= instante <= saidas[i]:
            presentes += 1
    return presentes


assert resultado == verificar_presentes(entradas, saidas, instante_buscado)


# ou de uma maneira mais pythonica
def students_in_instant(arrivals, departures, time_instant):
    return sum(
        arrival <= time_instant <= departure
        for arrival, departure in zip(arrivals, departures)
    )
