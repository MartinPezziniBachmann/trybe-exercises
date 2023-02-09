from eletrodomestico import Eletrodomestico


class Secador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco):
        super().__init__(cor, potencia, tensao, preco)
        self.__temperatura = "Frio"

    def mudar_temperatura(self):
        self.__temperatura = (
            "Frio" if self.__temperatura == "Quente" else "Quente"
        )
