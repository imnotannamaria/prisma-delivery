import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeliveryStatusUseCase {
  deliveryId: string;
  deliverymanId: string;
}

export class UpdateDeliverymanUseCase {
  async execute({ deliveryId, deliverymanId }: IUpdateDeliveryStatusUseCase) {
    const result = await prisma.deliveries.update({
      where: {
        id: deliveryId,
      },
      data: {
        deliverymanId,
      }
    })

    return result
  }
}