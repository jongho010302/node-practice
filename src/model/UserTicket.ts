import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import Studio from './Studio';
import Ticket from './Ticket';
import User from './User';


@Entity('user_ticket', {
  synchronize: true
})
export default class Course {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(type => Studio)
  studio!: Studio;

  @ManyToOne(type => Ticket)
  ticket!: Ticket;

  @ManyToOne(type => User)
  user!: Ticket;

  @Column({ type: 'int', nullable: false, comment: '총 이용 횟수' })
  maxCoupon!: number;

  @Column({ type: 'int', nullable: true, comment: '취소 가능 횟수' })
  maxCancel!: number;

  @Column({ type: 'int', nullable: false, comment: '총 이용 횟수' })
  remainingCoupon!: number;

  @Column({ type: 'int', nullable: true, comment: '취소 가능 횟수' })
  remainingCancel!: number;

  @Column('timestamp')
  @CreateDateColumn()
  createdAt!: Date; 

  @Column('timestamp')
  @UpdateDateColumn()
  updatedAt!: Date;
}