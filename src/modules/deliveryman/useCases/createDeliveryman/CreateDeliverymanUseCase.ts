import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliverymanDTO {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliverymanDTO) {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    })

    if (deliverymanExists) {
      throw new Error("Deliveryman already exists")
    }

    const hashPassword = await hash(password, 10)

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword
      }
    })

    return deliveryman
  }
}