import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { EnsureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { EnsureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/deliveries/FindAllDeliveriesDeliverymanController";
import { UpdateUpdateDeliveryStatusController } from "./modules/deliveries/useCases/updateDeliveryStatus/UpdateUpdateDeliveryStatusController";

const routes = Router();

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllDeliveriesController = new FindAllDeliveriesController()
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController()
const updateUpdateDeliveryStatusController = new UpdateUpdateDeliveryStatusController()

routes.post("/client", createClientController.handle)
routes.post("/authenticate/client", authenticateClientController.handle)
routes.post("/deliveryman", createDeliverymanController.handle)
routes.post("/authenticate/deliveryman", authenticateDeliverymanController.handle)
routes.post("/delivery", EnsureAuthenticateClient, createDeliveryController.handle)
routes.get("/delivery/available", EnsureAuthenticateDeliveryman, findAllAvailableController.handle)
routes.put(
  "/delivery/updateDeliveryman/:id", 
  EnsureAuthenticateDeliveryman, 
  updateDeliverymanController.handle
)
routes.get(
  "/client/deliveries",
  EnsureAuthenticateClient,
  findAllDeliveriesController.handle
)
routes.get(
  "/deliveryman/deliveries",
  EnsureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle
)
routes.put(
  "/deliveryman/deliveries/:id",
  EnsureAuthenticateDeliveryman,
  updateUpdateDeliveryStatusController.handle
)
export { routes }