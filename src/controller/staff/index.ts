import express from 'express';
import { successResponse } from '../../util/jsonResponse';
import { getStaffList, saveStaff } from '../../services/staff';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { studioId } = req.query;

    const staffList = await getStaffList(studioId);

    return successResponse(res, 200, 'Staff list returned', staffList);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { studioId, type, name, phone, introduce, profileUrl, hiredAt, isMonHoliday, monWorkingStartTime, monWorkingEndTime, isTueHoliday, tueWorkingStartTime, tueWorkingEndTime, isWedHoliday, wedWorkingStartTime, wedWorkingEndTime, isThuHoliday, thuWorkingStartTime, thuWorkingEndTime, isFriHoliday, friWorkingStartTime, friWorkingEndTime, isSatHoliday, satWorkingStartTime, satWorkingEndTime, isSunHoliday, sunWorkingStartTime, sunWorkingEndTime } = req.body;

    const staff = await saveStaff(studioId, type, name, phone, introduce, profileUrl, hiredAt, isMonHoliday, monWorkingStartTime, monWorkingEndTime, isTueHoliday, tueWorkingStartTime, tueWorkingEndTime, isWedHoliday, wedWorkingStartTime, wedWorkingEndTime, isThuHoliday, thuWorkingStartTime, thuWorkingEndTime, isFriHoliday, friWorkingStartTime, friWorkingEndTime, isSatHoliday, satWorkingStartTime, satWorkingEndTime, isSunHoliday, sunWorkingStartTime, sunWorkingEndTime)

    return successResponse(res, 201, 'Staff created successfully', staff);
  } catch (error) {
    next(error);
  }
});

export default router;