import { Question } from "src/question/question.entity";

export interface OptionInterface{
    id: number;
    option: string;
    isCorrect: boolean;
    questionId: Question;
    createdAt: Date;
    updatedAt: Date;
}