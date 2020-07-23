import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import Studio from './Studio';
import Staff from './Staff';

@Entity('courses', {
  synchronize: true
})
export default class Course {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(type => Studio)
  studio!: Studio;

  @ManyToOne(type => Staff)
  staff!: Staff;

  @Column({ type: 'enum', enum: ['G', 'P'], nullable: false, comment: '강의 타입 (G: 그룹, P: 프라이빗[개인, 듀엣, 트리플])' })
  type!: string;

  @Column({ type: 'varchar', length: 255, nullable: false, comment: '강의 제목' })
  title!: string;

  @Column({ type: 'text', nullable: true, comment: '강의 설명' })
  description!: string;

  @Column({ type: 'int', nullable: false, comment: '강의 최소 참석 인원' })
  minTrainee!: number;

  @Column({ type: 'int', nullable: false, comment: '강의 최대 참석 인원' })
  maxTrainee!: number;

  @Column({ type: 'varchar', length: 19, nullable: false, comment: '강의 시작 시간 (yyyy-mm-dd hh:mm:ss)', })
  startAt!: string;

  @Column({ type: 'varchar', length: 19, nullable: false, comment: '강의 종료 시간 (yyyy-mm-dd hh:mm:ss)' })
  endAt!: string;

  @Column({ type: 'varchar', length: 19, nullable: false, comment: '예약 가능 시간 (yyyy-mm-dd hh:mm:ss)' })
  bookingEndAt!: string;

  @Column({ type: 'varchar', length: 19, nullable: false, comment: '예약 취소 가능 시간 (yyyy-mm-dd hh:mm:ss)' })
  cancelEndAt!: string;

  @Column('timestamp')
  @CreateDateColumn()
  createdAt!: Date; 

  @Column('timestamp')
  @UpdateDateColumn()
  updatedAt!: Date;
}