import { Question } from "src/question/question.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { QuizInterface } from "./quiz.interface";

@Entity({name: 'quizzes'})
export class Quiz extends BaseEntity implements QuizInterface {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at', nullable: true})
    updatedAt: Date;

    @OneToMany(()=> Question, (question) => question.quiz)
    questions: Question[];
}