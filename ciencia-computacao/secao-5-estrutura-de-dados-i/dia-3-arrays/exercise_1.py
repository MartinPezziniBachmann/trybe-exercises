# 1 - OK
# 0 - Instabilidades

valores_coletados_1 = [0, 1, 1, 1, 0, 0, 1, 1]
resultado_1 = 3

valores_coletados_2 = [1, 1, 1, 1, 0, 0, 1, 1]
resultado_2 = 4


def verificar_maior_tempo_estavel(valores):
    maior_tempo = 0
    contador = 0
    for info in valores:
        if info == 1:
            contador += 1
        else:
            contador = 0
        if contador > maior_tempo:
            maior_tempo = contador
    return maior_tempo


assert resultado_1 == verificar_maior_tempo_estavel(valores_coletados_1)

assert resultado_2 == verificar_maior_tempo_estavel(valores_coletados_2)
