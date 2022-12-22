import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from "jsonwebtoken";

interface IAuthenticateClientDTO {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClientDTO) {
    const client = await prisma.clients.findFirst({
      where: { 
        username
      }
    })

    if (!client) {
      throw new Error("Username or password incorrect")
    }

    const passwordMatch = await compare(password, client.password)

    if (!passwordMatch) {
      throw new Error("Username or password incorrect")
    }

    const token = sign({ username }, "03e2ccf3d2066abbe26b362109da0910", {
      subject: client.id,
      expiresIn: "1d"
    })

    return token
  }
}