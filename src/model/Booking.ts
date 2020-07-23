import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import Studio from './Studio';
import UserTicket from './UserTicket';
import Course from './Course';

@Entity('booking', {
  synchronize: true,

})
export default class Booking {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(type => Studio)
  studio!: Studio;

  @ManyToOne(type => UserTicket)
  userTicket!: UserTicket;

  @ManyToOne(type => Course)
  course!: Course;
  
  @Column('timestamp')
  @CreateDateColumn()
  createdAt!: Date; 

  @Column('timestamp')
  @UpdateDateColumn()
  updatedAt!: Date;
}