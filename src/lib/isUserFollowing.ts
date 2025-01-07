import { prisma } from './prismaClient';

export const isUserFollowing = async (
  followerId: string,
  followingId: string
): Promise<boolean> => {
  const query = await prisma.follower.findFirst({
    where: {
      followerId,
      followingId,
    },
  });

  return Boolean(query);
};
