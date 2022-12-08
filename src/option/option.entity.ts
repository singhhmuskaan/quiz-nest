import { Question } from "src/question/question.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { OptionInterface } from "./option.interface";

@Entity({name: 'options'})
export class Options extends BaseEntity implements OptionInterface {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    option: string;

    @Column()
    isCorrect: boolean;

    @Column()
    questionId: Question;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @CreateDateColumn({name: 'updated_at'})
    updatedAt: Date;
    
}