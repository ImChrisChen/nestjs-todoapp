import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: string;

  // https://github.com/typeorm/typeorm/issues/877
  @Column({ type: 'timestamp', nullable: true })
  deadline?: string;

  @Column({ nullable: true, default: '' })
  remark: string;

  @Column({ default: 0, enum: 0 | 1 })
  done: 0 | 1;
}
