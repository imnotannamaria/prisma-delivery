import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliveryDTO {
  itemName: string;
  clientId: string;
}

export class CreateDeliveryUseCase {
  async execute({ itemName, clientId }: ICreateDeliveryDTO) {
    const delivery = await prisma.deliveries.create({
      data: {
        itemName,
        clientId
      }
    })

    return delivery;
  }
}