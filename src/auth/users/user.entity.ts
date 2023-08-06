import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Task } from '../tasks/task.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  nickname: string;

  @Column()
  password: string;

//   // eager : automatically fetched tasks from user call to DB
//   @OneToMany(() => Task, (task) => task.user, { eager: true })
//   tasks: Task[];
}