import express from 'express';
import { successResponse, failedResponse } from '../../util/jsonResponse';
import { saveUser, getUser, comparePassword, getToken, secessUser } from '../../services/auth';
import { checkJwt } from '../middleware';

const router = express.Router();

router.post('/sign-up', async (req, res, next) => {
  try {
    const { studioId, username, password, email, name, gender, birth, phone, profileUrl } = req.body;

    const exUsername = await getUser({ username });
    if(exUsername) {
      return failedResponse(res, 403, 'Username has been already used.');
    }

    const exEmail = await getUser({ email });
    if(exEmail) {
      return failedResponse(res, 403, 'Email has been already used.');
    }

    const exName = await getUser({ name });
    if(exName) {
      return failedResponse(res, 403, 'Name has been already used.');
    }

    const user = await saveUser(studioId, username, password, email, name, gender, phone, birth, profileUrl);

    return successResponse(res, 201, 'User created successfully', user);

  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await getUser({ username });
    if(!user) {
      return failedResponse(res, 401, '해당 아이디가 존재하지 않습니다.');
    }

    const comparedBoolean = await comparePassword(password, user.password);
    if(!comparedBoolean)  {
      return failedResponse(res, 401, '비밀번호가 틀렸습니다.');
    }

    const token = await getToken(username);

    return successResponse(res, 201, 'User loged in successfully', { user, token });

  } catch (error) {
    next(error);
  }
});

router.post('/secession', checkJwt, async (req, res, next) => {
 try {
    const { id, secessionReason, secessionAt } = req.body;
    const updateResult = secessUser(id, secessionReason, secessionAt);

    console.log(updateResult);

    return successResponse(res, 201, 'User deleted successfully', { updateResult });
 } catch (error) {
   next(error);
 }
});

export default router;