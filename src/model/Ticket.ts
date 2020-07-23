import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm';

import Studio from './Studio';

@Entity('tickets', {
  synchronize: true
})
export default class Ticket {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(type => Studio)
  studio!: Studio;

  @Column({ type: 'enum', enum: ['T', 'P'], nullable: false, comment: '수강권 타입 (T: 횟수제, P: 기간제)' })
  type!: string;

  @Column({ type: 'enum', enum: ['G', 'P'], nullable: false, comment: '강의 타입 (G: 그룹, P: 프라이빗[개인, 듀엣, 트리플])' })
  availableClassType!: string;

  @Column({ type: 'text', nullable: true, comment: '수강권 설명' })
  description!: string;

  @Column({ type: 'int', nullable: true, comment: '수강권 설명' })
  price!: number;

  @Column({ type: 'int', nullable: true, comment: '총 이용 횟수' })
  maxCoupon!: number;

  @Column({ type: 'int', nullable: true, comment: '취소 가능 횟수' })
  maxCancel!: number;

  @Column({ type: 'tinyint', nullable: false, default: true, comment: '수강권 판매 여부' })
  isSelling!: boolean;

  @Column('timestamp')
  @CreateDateColumn()
  createdAt!: Date; 

  @Column('timestamp')
  @UpdateDateColumn()
  updatedAt!: Date;
}