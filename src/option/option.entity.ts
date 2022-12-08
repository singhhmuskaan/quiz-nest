import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OptionInterface } from './option.interface';
import { Question } from '../question/question.entity';

@Entity({ name: 'options' })
export class Option extends BaseEntity implements OptionInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  option: string;

  @Column({ name: 'is_correct' })
  isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.options)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
