// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercise8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    // Escreva aqui seu código
    getPokemonDetails((element) => (element.name === 'Charmder'), (result) => {
      try {
        expect(result).toBe('Não temos esse pokémon para você :(');
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
    getPokemonDetails((element) => (element.name === 'Charmander'), (result) => {
      try {
        expect(result).toBe(`Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});