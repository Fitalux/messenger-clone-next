import NextAuth from "next-auth";
import { authOptions } from "@/app/libs/nextAuthOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
