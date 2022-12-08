import { Quiz } from "src/quiz/quiz.entity";

export interface QuestionInterface{
    id: number;
    label: string;
    quiz: Quiz;
    createdAt: Date;
    updatedAt: Date;
}