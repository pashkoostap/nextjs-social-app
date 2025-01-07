import { prisma } from './prismaClient';

export const isUserBlocked = async (
  blockerId: string,
  blockedId: string
): Promise<boolean> => {
  const query = await prisma.block.findFirst({
    where: {
      blockerId,
      blockedId,
    },
  });

  return Boolean(query);
};
