import { getRepository } from 'typeorm';
import Studio from '../../model/Studio';

export const getStudioList = async (): Promise<Studio[]> => {
  const studioRepository = getRepository(Studio);

  const studioList = await studioRepository.find();

  return studioList;
}

export const saveStudio = async (
  name: string,
  telNo: string,
  addr1: string,
  addr2: string,
  regAt: string
): Promise<Studio> => {
  const studioRepository = getRepository(Studio);

  return await studioRepository.save({
    name, telNo, addr1, addr2, regAt
  });
}