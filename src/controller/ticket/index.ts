import express from 'express';
import { successResponse } from '../../util/jsonResponse';
import { getTicketList, getTicketDetail, saveTicket } from '../../services/ticket';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { studioId } = req.query;

    const ticketList = await getTicketList(studioId);

    return successResponse(res, 200, 'Ticket list returned', ticketList);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;

    const ticketDetail = await getTicketDetail(id);

    return successResponse(res, 200, 'Ticket detail returned', ticketDetail);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { studioId, type, availableClassType, description, price, maxCoupon, maxCancel } = req.body;

    const ticket = await saveTicket(studioId, type, availableClassType, description, price, maxCoupon, maxCancel);

    return successResponse(res, 201, 'Ticket created successfully', ticket);
  } catch (error) {
    next(error);
  }
});

export default router;