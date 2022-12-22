import { Request, Response } from "express";
import { UpdateUpdateDeliveryStatusUseCase } from "./UpdateDeliveryStatusUseCase";

export class UpdateUpdateDeliveryStatusController {
  async handle(request: Request, response: Response) {
    const { deliverymanId } = request

    const { id: deliveryId } = request.params

    const updateDeliverymanUseCase = new UpdateUpdateDeliveryStatusUseCase()

    const delivery = await updateDeliverymanUseCase.execute({
      deliveryId,
      deliverymanId
    })

    return response.json(delivery)
  }
}