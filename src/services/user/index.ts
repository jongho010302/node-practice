import { getRepository } from 'typeorm';
import User from '../../model/User';

export const getUserList = async (studioId: string) => {
  const userRepo = getRepository(User);

  const userList = await userRepo.find({
    where: {
      studioId
    }
  });

  return userList;
}