import { getRepository, UpdateResult } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../model/User';

const { JWT_SECRET_KEY } = process.env;

export const getUser = async (where: any): Promise<User | undefined> => {
  const userRepository = getRepository(User);

  const user = await userRepository.findOne({ where });

  return user;
}

export const saveUser = async (studioId: number, username: string, password: string, email: string, name: string, gender: string, phone: string, birth: string, profileUrl: string): Promise<User> => {
  const userRepository = getRepository(User);

  const hashedPassword = await bcrypt.hash(password, 12);

  return await userRepository.save({
    studioId, username, password: hashedPassword, email, name, gender, phone, birth, profileUrl
  });
}

export const comparePassword = async (password: string, userPassword: string): Promise<boolean> => {
  const comparedBoolean = await bcrypt.compare(password, userPassword);

  console.log(await bcrypt.hash(password, 12))

  return comparedBoolean;
}

export const getToken = async (username: string): Promise<string> => {
  const token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 60),
    username
  }, JWT_SECRET_KEY);

  return token;
}

export const secessUser = async (id: string, secessionReason: string, secessionAt: string): Promise<UpdateResult> => {
  const userQueryBuilder = getRepository(User).createQueryBuilder();

  return await userQueryBuilder.update(User).set({ isSecession: true, secessionReason, secessionAt }).where('id = :id', { id }).execute();
}
