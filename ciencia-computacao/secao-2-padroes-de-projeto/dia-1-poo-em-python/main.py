from circulo import Circulo
from estatistica import Estatistica
from pessoa import Pessoa
from retangulo import Retangulo
from tv import TV
from ventilador import Ventilador


def main():
    pessoa_com_calor = Pessoa("João", 1000)
    ventilador_preto = Ventilador("Preto", 200, 127, 200)
    pessoa_com_calor.comprar_ventilador(ventilador_preto)

    print(pessoa_com_calor)

    tv = TV(100)
    tv.ligar_desligar()
    tv.aumentar_volume()
    tv.aumentar_volume()
    tv.modificar_canal(24)

    print(tv)

    print("Média: ", Estatistica.media([1, 2, 3]))
    print("Moda: ", Estatistica.media([1, 2, 3, 2]))

    retangulo = Retangulo(2, 4)
    circulo = Circulo(2)

    print("Area do retangulo: ", retangulo.area())
    print("Perimetro do circulo: ", circulo.perimetro())


main()
