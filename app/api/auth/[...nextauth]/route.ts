import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import prisma from "../../../libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { CredentialsProvider } from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const autOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
};

const handler = NextAuth({
  providers: [],
});

export { handler as GET, handler as POST };
