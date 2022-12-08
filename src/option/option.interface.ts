import { Question } from 'src/question/question.entity';

export interface OptionInterface {
  id: number;
  option: string;
  isCorrect: boolean;
  question: Question;
  createdAt: Date;
  updatedAt: Date;
}
