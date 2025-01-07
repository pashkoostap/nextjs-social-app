import { prisma } from './prismaClient';

export const isFollowUserRequestSent = async (
  senderId: string,
  receiverId: string
): Promise<boolean> => {
  const query = await prisma.followRequest.findFirst({
    where: {
      senderId,
      receiverId,
    },
  });

  return Boolean(query);
};
