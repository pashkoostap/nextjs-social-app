import type { User } from './prismaClient';

export const getUserName = (user: User) => {
  return user.name
    ? [user.name, user.surname].filter(Boolean).join(' ')
    : user.username;
};
