import Cliente from "./Cliente";
import ItemPedido from "./ItemPedido";

class Pedido {
  private cliente: Cliente;
  private itensConsumidos: ItemPedido[];
  private formaPagamento: string;
  private percentualDesconto: number;

  calcularTotalPedido = () => this.itensConsumidos.reduce((acc, e) => acc + e.preco, 0);

  calcularDescontoPedido = () => (this.calcularTotalPedido() / 100) * (100 - this.percentualDesconto);
}