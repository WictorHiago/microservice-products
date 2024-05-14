import Order from "../../entities/Order";

export interface IOrderRepository {
  create(order: Order): Promise<Order | null>;
  findById(id: string): Promise<Order | null>;
}
