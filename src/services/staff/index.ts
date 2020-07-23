import { getRepository } from 'typeorm';
import Staff from '../../model/Staff';

export const getStaffList = async (studioId: string): Promise<Staff[]> => {
  const staffRepository = getRepository(Staff);

  const staffList = await staffRepository.find({
    where: {
      studioId
    }
  })

  return staffList;
}

export const saveStaff = async (
  studioId: number,
  type: string,
  name: string,
  phone: string,
  introduce: string,
  profileUrl: string,
  hiredAt: string,
  isMonHoliday: boolean,
  monWorkingStartTime: string,
  monWorkingEndTime: string,
  isTueHoliday: boolean,
  tueWorkingStartTime: string,
  tueWorkingEndTime: string,
  isWedHoliday: boolean,
  wedWorkingStartTime: string,
  wedWorkingEndTime: string,
  isThuHoliday: boolean,
  thuWorkingStartTime: string,
  thuWorkingEndTime: string,
  isFriHoliday: boolean,
  friWorkingStartTime: string,
  friWorkingEndTime: string,
  isSatHoliday: boolean,
  satWorkingStartTime: string,
  satWorkingEndTime: string,
  isSunHoliday: boolean,
  sunWorkingStartTime: string,
  sunWorkingEndTime: string,
): Promise<Staff> => {
  const staffRepository = getRepository(Staff);

  return await staffRepository.save({
    studioId, type, name, phone, introduce, profileUrl, hiredAt, isMonHoliday, monWorkingStartTime, monWorkingEndTime, isTueHoliday, tueWorkingStartTime, tueWorkingEndTime, isWedHoliday, wedWorkingStartTime, wedWorkingEndTime, isThuHoliday, thuWorkingStartTime, thuWorkingEndTime, isFriHoliday, friWorkingStartTime, friWorkingEndTime, isSatHoliday, satWorkingStartTime, satWorkingEndTime, isSunHoliday, sunWorkingStartTime, sunWorkingEndTime
  });
}