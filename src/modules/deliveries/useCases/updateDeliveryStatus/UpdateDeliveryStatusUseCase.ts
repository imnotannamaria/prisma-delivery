import { prisma } from "../../../../database/prismaClient";

interface IUpdateUpdateDeliveryStatusUseCase {
  deliveryId: string;
  deliverymanId: string;
}

export class UpdateUpdateDeliveryStatusUseCase {
  async execute({ deliveryId, deliverymanId }: IUpdateUpdateDeliveryStatusUseCase) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id: deliveryId,
        deliverymanId
      },
      data: {
        endedAt: new Date()
      }
    })

    return result
  }
}