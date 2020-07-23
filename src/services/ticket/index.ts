import { getRepository } from 'typeorm';
import Ticket from '../../model/Ticket';

export const getTicketList = async (studioId: string): Promise<Ticket[]> => {
  const ticketRepository = getRepository(Ticket);

  const ticketList = await ticketRepository.find({
    where: {
      studioId
    }
  });

  return ticketList;
}

export const getTicketDetail = async (id: string): Promise<{ ticket: Ticket | undefined, issuedTicket: any }> => {
  const ticketRepo = getRepository(Ticket);

  const ticket = await ticketRepo.findOne({ id: Number.parseInt(id) });

  // 발급된 수강권 데이터 가져오기
  const issuedTicket = await ticketRepo.findOne({ id: Number.parseInt(id) });

  return {
    ticket,
    issuedTicket,
  }; 
}

export const saveTicket = async (
  studioId: number,
  type: string,
  availableClassType: string,
  description: string,
  price: number,
  maxCoupon: number,
  maxCancel: number
) => {
  const ticketRepository = getRepository(Ticket);

  return await ticketRepository.save({
    studioId, type, availableClassType, description, price, maxCoupon, maxCancel, isSelling: true
  });
}
