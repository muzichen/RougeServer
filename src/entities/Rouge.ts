import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Rouge extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: "bigint"
  })
  id: string;

  @Column({
    type: "varchar",
    nullable: false,
    unique: false
  })
  name: string;

  @ManyToMany(() => User, user => user.rouges)
  @JoinTable()
  users: User[]
}