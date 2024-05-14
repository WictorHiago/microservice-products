import { Router } from "express";
import OrderRepository from "../repositories/OrderRepository";
import CreateOrderUseCase from "../../usecases/CreateOrderUseCase";
import GetOrderUseCase from "../../usecases/GetOrderUseCase";
import CreateOrderController from "../controllers/CreateOrderController";
import FindOneOrderController from "../controllers/FindOneOrderController";

const orderRoutes = Router();

const orderRepository = new OrderRepository();
const createOrderUseCase = new CreateOrderUseCase(orderRepository);
const getOrderUseCase = new GetOrderUseCase(orderRepository);
const createOrderController = new CreateOrderController(createOrderUseCase);
const findOneController = new FindOneOrderController(getOrderUseCase);

orderRoutes.post("/order/add", createOrderController.save);
orderRoutes.get("/order/:id", findOneController.findOne);

export default orderRoutes;
