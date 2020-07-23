import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm';

import Studio from './Studio';

@Entity('staffs', {
  synchronize: true
})
export default class Staff {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(type => Studio)
  studio!: Studio;

  @Column({ type: 'enum', enum: ['O', 'I', 'M'], nullable: false, comment: '관리자 타입(O: Owner, I: Instructor, M: Manager)' })
  type!: string;

  @Column({ type: 'varchar', length: 255, nullable: false, comment: '이름' })
  name!: string;

  @Column({ type: 'varchar', length: 13, nullable: false, comment: '전화번호 (010-xxxx-xxxx)' })
  phone!: string;

  @Column({ type: 'varchar', length: 255, nullable: false, comment: '자기 소개' })
  introduce!: string;

  @Column({ type: 'varchar', length: 255, nullable: false, default: 'https://seoulforest-image.s3.ap-northeast-2.amazonaws.com/default_profile.png', comment: '프로필 URL' })
  profileUrl!: string;

  @Column({ type: 'varchar', length: 255, nullable: false, comment: '채용 일자 (yyyy-mm-dd)' })
  hiredAt!: string;
  
  @Column({ type: 'tinyint', nullable: false, comment: '월요일 휴일 여부' })
  isMonHoliday!: boolean;

  @Column({ type: 'varchar', length: 5, nullable: false, comment: '월요일 근무 시작 시간' })
  monWorkingStartAt!: string;

  @Column({ type: 'varchar', length: 5, nullable: false, comment: '월요일 근무 종료 시간' })
  monWorkingEndTime!: string;

  @Column({ type: 'tinyint', nullable: false, comment: '화요일 휴일 여부' })
  isTueHoliday!: boolean;

  @Column({ type: 'varchar', length: 5, nullable: false, comment: '화요일 근무 시작 시간' })
  tueWorkingStartTime!: string;

  @Column({ type: 'varchar', length: 5, nullable: false, comment: '화요일 근무 종료 시간' })
  tueWorkingEndTime!: string;

  @Column({ type: 'tinyint', nullable: false, comment: '수요일 휴일 여부' })
  isWedHoliday!: boolean;

  @Column({ type: 'varchar', length: 5, nullable: false, comment: '수요일 근무 시작 시간' })
  wedWorkingStartTime!: string;

  @Column({ type: 'varchar', length: 5, nullable: false, comment: '수요일 근무 종료 시간' })
  wedWorkingEndTime!: string;

  @Column({ type: 'tinyint', nullable: false, comment: '목요일 휴일 여부' })
  isThuHoliday!: boolean;

  @Column({ type: 'varchar', length: 5, nullable: false, comment: '목요일 근무 시작 시간' })
  thuWorkingStartTime!: string;

  @Column({ type: 'varchar', length: 5, nullable: false, comment: '목요일 근무 종료 시간' })
  thuWorkingEndTime!: string;

  @Column({ type: 'tinyint', nullable: false, comment: '금요일 휴일 여부' })
  isFriHoliday!: boolean;

  @Column({ type: 'varchar', length: 5, nullable: false, comment: '금요일 근무 시작 시간' })
  friWorkingStartTime!: string;

  @Column({ type: 'varchar', length: 5, nullable: false, comment: '금요일 근무 종료 시간' })
  friWorkingEndTime!: string;

  @Column({ type: 'tinyint', nullable: false, comment: '토요일 휴일 여부' })
  isSatHoliday!: boolean;

  @Column({ type: 'varchar', length: 5, nullable: false, comment: '토요일 근무 시작 시간' })
  satWorkingStartTime!: string;

  @Column({ type: 'varchar', length: 5, nullable: false, comment: '토요일 근무 종료 시간' })
  satWorkingEndTime!: string;

  @Column({ type: 'tinyint', nullable: false, comment: '일요일 휴일 여부' })
  isSunHoliday!: boolean;

  @Column({ type: 'varchar', length: 5, nullable: false, comment: '일요일 근무 시작 시간' })
  sunWorkingStartTime!: string;

  @Column({ type: 'varchar', length: 5, nullable: false, comment: '일요일 근무 종료 시간' })
  sunWorkingEndTime!: string;

  @Column('timestamp')
  @CreateDateColumn()
  createdAt!: Date; 

  @Column('timestamp')
  @UpdateDateColumn()
  updatedAt!: Date;
}