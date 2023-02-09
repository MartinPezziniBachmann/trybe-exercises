from math import pi as PI
from figura_geometrica import FiguraGeometrica


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return PI * self.raio * self.raio

    def perimetro(self):
        return PI * self.raio * 2
