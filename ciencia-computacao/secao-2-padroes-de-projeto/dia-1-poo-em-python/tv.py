class TV:
    def __init__(self, tamanho):
        self.__tamanho = tamanho
        self.__volume = 50
        self.__canal = 1
        self.__ligada = False

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if canal < 1 or canal > 99:
            raise ValueError("Canal indisponível")

        self.canal = canal

    def __str__(self):
        return (
            f"Tamanho: {self.__tamanho}\n"
            f"Volume: {self.__volume}\n"
            f"Canal: {self.__canal}\n"
            f"Ligada: {self.__ligada}"
        )
