from pessoa import Pessoa
from ventilador import Ventilador


def main():
    pessoa_com_calor = Pessoa("João", 1000)
    ventilador_preto = Ventilador("Preto", 200, 127, 200)
    pessoa_com_calor.comprar_ventilador(ventilador_preto)

    print(pessoa_com_calor)


main()
