import express from 'express';
import { successResponse } from '../../util/jsonResponse';
import { getUserList } from '../../services/user';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { studioId } = req.query;

    const userList = await getUserList(studioId);
    
    return successResponse(res, 201, 'User list returned', userList);
  } catch (error) {
    next(error);
  }
});

export default router;