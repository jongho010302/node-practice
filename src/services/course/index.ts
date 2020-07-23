import { getRepository } from 'typeorm';
import Course from '../../model/Course';

export const getCourseList = async (lectureDate: string, lectureType: string) => {
  const lectureRepository = getRepository(Course);

  let lectureList = await lectureRepository.createQueryBuilder('lecture')
                                          .leftJoinAndSelect('lecture.lectureType', 'lectureType')
                                          .leftJoinAndSelect('lecture.staff', 'staff')
                                          .where('lecture_date = :lectureDate', { lectureDate })
                                          .andWhere('lectureType.type = :lectureType', { lectureType })
                                          .getMany();

  return lectureList;
}