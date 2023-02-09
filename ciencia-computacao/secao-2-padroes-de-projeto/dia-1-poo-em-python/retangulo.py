from figura_geometrica import FiguraGeometrica


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.altura * self.altura

    def perimetro(self):
        return (self.base + self.altura) * 2
