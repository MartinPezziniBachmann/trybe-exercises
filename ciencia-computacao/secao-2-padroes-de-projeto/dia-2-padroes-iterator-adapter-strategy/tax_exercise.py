from abc import ABC, abstractmethod


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto):
        return imposto.calcular(self.valor)


class TaxStrategy(ABC):
    @classmethod
    @abstractmethod
    def calcular(cls):
        raise NotImplementedError


class ISS(TaxStrategy):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.1


class ICMS(TaxStrategy):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.06


class PIS(TaxStrategy):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.0065


class COFINS(TaxStrategy):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.03


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(ISS)}")
print(f"ICMS: {orcamento.calcular_imposto(ICMS)}")
print(f"PIS: {orcamento.calcular_imposto(PIS)}")
print(f"COFINS: {orcamento.calcular_imposto(COFINS)}")
