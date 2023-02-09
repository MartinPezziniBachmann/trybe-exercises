from abc import ABC, abstractmethod


class FiguraGeometrica(ABC):
    @abstractmethod
    def area():
        raise NotImplementedError

    @abstractmethod
    def perimetro():
        raise NotImplementedError
