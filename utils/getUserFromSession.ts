import { getToken } from "next-auth/jwt";

import prisma from "../lib/prisma";

const getUserFromSession = async (req: any) => {
  try {
    const token = await getToken({ req });

    if (token) {
      const userId = String(token?.sub);
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (user) {
        return {
          ...user,
          createdAt: user.createdAt.toISOString(),
          updatedAt: user.updatedAt.toISOString(),
        };
      }
    }

    return null;
  } catch {
    return null;
  }
};

export default getUserFromSession;
