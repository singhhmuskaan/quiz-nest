import { Quiz } from "src/quiz/quiz.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { QuestionInterface } from "./question.interface";

@Entity({name: 'questions'})
export class Question extends BaseEntity implements QuestionInterface {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    label: string;

    @ManyToOne( () => Quiz , quiz => quiz.questions)
    @JoinColumn({name: 'quiz_id'})
    quiz: Quiz;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @CreateDateColumn({name: 'updated_at'})
    updatedAt: Date;

}