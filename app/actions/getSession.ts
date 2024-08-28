// 예: getSession.ts
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/libs/nextAuthOptions";

export default async function getSession() {
  return await getServerSession(authOptions);
}
