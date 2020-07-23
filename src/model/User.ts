import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne
} from 'typeorm';

import Studio from './Studio';
import Staff from './Staff';

@Entity('users', {
  synchronize: true
})
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(type => Studio)
  studio!: Studio;

  @ManyToOne(type => Staff)
  staff!: Staff;

  @Column({ type: 'varchar', unique: true, length: 150, comment: '로그인 아이디' })
  username!: string;

  @Column({ type: 'varchar', length: 255, nullable: false, comment: '로그인 비밀번호' })
  password!: string;

  @Column({ type: 'varchar', unique: true, length: 150, comment: '이메일' })
  email!: string;

  @Column({ type: 'varchar', length: 255, nullable: false, comment: '이름' })
  name!: string;

  @Column({ type: 'enum', enum: ['Male', 'Female'], comment: '성별' })
  gender!: string;

  @Column({ type: 'varchar', length: 10, nullable: false, comment: '생일 (yyyy-mm-dd)' })
  birth!: string;

  @Column({ type: 'varchar', length: 13, nullable: false, comment: '전화번호 (010-xxxx-xxxx)' })
  phone!: string;

  @Column({ type: 'varchar', length: 255, nullable: false, default: 'https://seoulforest-image.s3.ap-northeast-2.amazonaws.com/default_profile.png' })
  profileUrl!: string;

  @Column({ type: 'tinyint', nullable: false, default: false, comment: '관리자 여부' })
  isStaff!: boolean;

  @Column({ type: 'tinyint', nullable: false, default: false, comment: '탈퇴 여부' })
  isSecession!: boolean;

  @Column({ type: 'text', nullable: true, comment: '탈퇴 이유' })
  secessionReason!: string;

  @Column({ type: 'varchar', length: 10, nullable: true, comment: '탈퇴 일자 (yyyy-mm-dd)' })
  secessionAt!: string;

  @Column('timestamp')
  @CreateDateColumn()
  createdAt!: Date; 

  @Column('timestamp')
  @UpdateDateColumn()
  updatedAt!: Date;
}