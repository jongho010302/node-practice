import express from 'express';
import { successResponse } from '../../util/jsonResponse';
import { getCourseList } from '../../services/course';

const router = express.Router();

// 전체 레슨 스케쥴 가져오기
router.get('/', async (req, res, next) => {
  try {
    const { lectureDate, lectureType } = req.query;

    const courseList = await getCourseList(lectureDate, lectureType);
    
    return successResponse(res, 201, 'Staff created successfully', courseList);
  } catch (error) {
    next(error);
  }
});

export default router;