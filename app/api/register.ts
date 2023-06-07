import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const registerUserSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Must be atleast 6 characters"),
});

const prisma = new PrismaClient();

export default async function registerUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = registerUserSchema.parse(req.body);
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (user) return res.send({ user: null, message: "User already exits" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return res.send({
    user: newUser,
    message: "User created Succesfully",
  });
}
