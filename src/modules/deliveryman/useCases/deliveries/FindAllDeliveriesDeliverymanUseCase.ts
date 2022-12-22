import { prisma } from "../../../../database/prismaClient"

export class FindAllDeliveriesDeliverymanUseCase {
  async execute(deliverymanId: string){
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: deliverymanId
      },
      select: {
        id: true,
        username: true,
        Deliveries: true,
      }
    })

    return deliveries
  }
}