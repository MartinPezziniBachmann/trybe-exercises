from abc import ABC, abstractmethod


class Alarme:
    def __init__(self):
        self.rotinas = []

    def adicionar_rotina(self, rotina):
        self.rotinas.append(rotina)

    def acionar_rotinas(self):
        for rotina in self.rotinas:
            rotina.acionar()

    def despertar(self):
        print("Alarme tocando")
        self.acionar_rotinas()


class Rotina(ABC):
    @abstractmethod
    def acionar(self):
        pass


class AcenderLuzes(Rotina):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotina(self)

    def acionar(self):
        print("Acendendo luzes")


class PrepararCafe(Rotina):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotina(self)

    def acionar(self):
        print("Preparando café")


if __name__ == "__main__":
    alarme = Alarme()

    AcenderLuzes(alarme)

    alarme.despertar()

    PrepararCafe(alarme)

    alarme.despertar()
