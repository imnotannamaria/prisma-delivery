import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { itemName } = request.body;

    const { clientId } = request
    
    const createdeliveryUseCase = new CreateDeliveryUseCase();

    const delivery = await createdeliveryUseCase.execute({
      itemName,
      clientId
    })

    return response.json(delivery);
  }
}