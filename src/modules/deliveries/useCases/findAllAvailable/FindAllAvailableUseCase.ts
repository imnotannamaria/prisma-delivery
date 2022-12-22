import { prisma } from "../../../../database/prismaClient";

export class FindAllAvailableUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        endedAt: null,
        deliverymanId: null
      }
    })

    return deliveries
  }
}