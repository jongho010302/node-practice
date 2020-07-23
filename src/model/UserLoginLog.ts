import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import Studio from './Studio';
import User from './User';

@Entity('user_login_log', {
  synchronize: true,

})
export default class Booking {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(type => Studio)
  studio!: Studio;

  @ManyToOne(type => User)
  user!: User;
  
  @Column('timestamp')
  @CreateDateColumn()
  createdAt!: Date; 

  @Column('timestamp')
  @UpdateDateColumn()
  updatedAt!: Date;
}