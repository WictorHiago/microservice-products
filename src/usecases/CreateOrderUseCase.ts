import { v4 as uuidv4 } from "uuid";
import CreateUserDTO from "../adapters/dto/CreateUserDTO";
import { IOrderRepository } from "../adapters/repositories/IOrderRepository";
import CustomException from "../adapters/middlewares/CustomException";

class CreateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(data: CreateUserDTO) {
    const { order_title, order_description } = data;

    if (!order_title || !order_description) {
      throw new CustomException("Missing required fields", 400);
    }

    const newOrder = {
      id: uuidv4(),
      order_title,
      order_description,
    };

    await this.orderRepository.create(newOrder);

    return newOrder;
  }
}

export default CreateOrderUseCase;
