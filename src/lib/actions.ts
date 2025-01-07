'use server';

import { prisma } from './prismaClient';

export const switchFollowUser = async (
  followerId: string,
  followingId: string
) => {
  try {
    const query = await prisma.follower.findFirst({
      where: {
        followerId,
        followingId,
      },
    });

    if (query) {
      await prisma.follower.delete({
        where: {
          id: query.id,
        },
      });
    } else {
      const followingRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: followerId,
          receiverId: followingId,
        },
      });

      if (followingRequest) {
        await prisma.followRequest.delete({
          where: {
            id: followingRequest.id,
          },
        });
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: followerId,
            receiverId: followingId,
          },
        });
      }
    }
  } catch (err) {
    throw err;
  }
};

export const switchBlockUser = async (blockerId: string, blockedId: string) => {
  try {
    const existingBlock = await prisma.block.findFirst({
      where: {
        blockerId,
        blockedId,
      },
    });

    if (existingBlock) {
      await prisma.block.delete({
        where: {
          id: existingBlock.id,
        },
      });
    } else {
      await prisma.block.create({
        data: {
          blockerId,
          blockedId,
        },
      });
    }
  } catch (err) {
    throw err;
  }
};

export const toggleFollowRequest = async (
  senderId: string,
  receiverId: string,
  action: 'accept' | 'decline'
) => {
  try {
    const followRequest = await prisma.followRequest.findFirst({
      where: {
        senderId,
        receiverId,
      },
    });

    if (followRequest) {
      await prisma.followRequest.delete({
        where: {
          id: followRequest.id,
        },
      });
    }

    if (action === 'accept') {
      await prisma.follower.create({
        data: {
          followerId: senderId,
          followingId: receiverId,
        },
      });
    }
  } catch (err) {
    throw err;
  }
};
