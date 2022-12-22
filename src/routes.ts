import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { EnsureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";

const routes = Router();

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const createDeliveryController = new CreateDeliveryController()

routes.post("/client", createClientController.handle)
routes.post("/authenticate/client", authenticateClientController.handle)
routes.post("/deliveryman", createDeliverymanController.handle)
routes.post("/authenticate/deliveryman", authenticateDeliverymanController.handle)
routes.post(
  "/delivery", 
  EnsureAuthenticateClient,
  createDeliveryController.handle
)

export { routes }