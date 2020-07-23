import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('studios', {
  synchronize: true
})
export default class Studio {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255, nullable: false, comment: '센터 이름' })
  name!: string;

  @Column({ type: 'varchar', length: 14, nullable: false, comment: '센터 전화번호 (xxxx-xxxx-xxxx)' })
  telNo!: string;

  @Column({ type: 'varchar', length: 255, nullable: false, comment: '센터 주소1' })
  addr1!: string;

  @Column({ type: 'varchar', length: 255, nullable: false, comment: '센터 주소2' })
  addr2!: string;

  @Column({ type: 'varchar', length: 10, nullable: false, comment: '센터 등록일 (yyyy-mm-dd)' })
  regAt!: string;

  @Column('timestamp')
  @CreateDateColumn()
  createdAt!: Date; 

  @Column('timestamp')
  @UpdateDateColumn()
  updatedAt!: Date;
}