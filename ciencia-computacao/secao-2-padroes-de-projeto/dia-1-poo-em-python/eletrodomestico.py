class Eletrodomestico:
    @property
    def velocidade(self):
        return self.__velocidade

    @property
    def velocidade_maxima(self):
        return self.__velocidade_maxima

    @velocidade_maxima.setter
    def velocidade_maxima(self, velocidade):
        if velocidade < 0:
            raise ValueError("Velocidade invalida")
        self.__velocidade_maxima = velocidade

    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.velocidade_maxima = 3

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError("Velocidade invalida")

        self.__velocidade = velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado
