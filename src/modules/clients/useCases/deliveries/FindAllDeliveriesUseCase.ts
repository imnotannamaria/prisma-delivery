import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesUseCase {
  async execute(cliendId: string){
    const deliveries = await prisma.clients.findMany({
      where: {
        id: cliendId
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