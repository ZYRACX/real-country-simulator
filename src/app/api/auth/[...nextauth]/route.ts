// app/api/auth/[...nextauth]/route.ts

import auth  from "next-auth";
import  NextAuthOptions  from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
import NextAuth from "next-auth";

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toString() },
        });
        if (!user || !user.password) {
          throw new Error("No user found");
        }
        const isValid = await compare(credentials.password.toString(), user.password);
        if (!isValid) {
          throw new Error("Invalid credentials");
        }
        return {
          id:   user.user_id.toString(),
          name: user.username,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error:  "/auth/error",
  },
  session: { strategy: "jwt" as const },
  secret:  process.env.NEXTAUTH_SECRET,
};

// `auth()` returns an object with GET & POST handlers
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
