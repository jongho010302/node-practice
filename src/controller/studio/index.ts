import express from 'express';
import { successResponse } from '../../util/jsonResponse';
import { getStudioList, saveStudio } from '../../services/studio';
import { checkJwt } from '../middleware';

const router = express.Router();

router.get('/', checkJwt, async (req, res, next) => {
  try {
    const studioList = await getStudioList();

    return successResponse(res, 200, 'Studio list returned', studioList);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, telNo, addr1, addr2, regAt } = req.body;

    const studio = await saveStudio(name, telNo, addr1, addr2, regAt);

    return successResponse(res, 201, 'Studio created successfully', studio);
  } catch (error) {
    next(error);
  }
});

export default router;