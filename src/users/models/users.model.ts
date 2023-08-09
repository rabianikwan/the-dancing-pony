import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique : true})
  nickname: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({ length: 60 })
  password: string;
}
