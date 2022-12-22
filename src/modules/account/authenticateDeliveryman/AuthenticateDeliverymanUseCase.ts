import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateDeliverymanDTO {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliverymanDTO) {
    const Deliveryman = await prisma.deliveryman.findFirst({
      where: { 
        username
      }
    })

    if (!Deliveryman) {
      throw new Error("Username or password incorrect")
    }

    const passwordMatch = await compare(password, Deliveryman.password)

    if (!passwordMatch) {
      throw new Error("Username or password incorrect")
    }

    const token = sign({ username }, "03e2ccf3d2066a8be26b362109da0910", {
      subject: Deliveryman.id,
      expiresIn: "1d"
    })

    return token
  }
}