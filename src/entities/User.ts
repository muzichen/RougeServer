import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rouge } from "./Rouge";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: "bigint"
  })
  id: string;
  
  @Column({
    type: "varchar",
    length: 100,
    nullable: true
  })
  firstName: string;

  @Column({
    type: "varchar",
    length: 100,
    nullable: true
  })
  lastName: string;

  @Column({
    type: "varchar",
    unique: true,
    nullable: false
  })
  email: string;

  @Column({
    type: "varchar",
    nullable: false,
    length: 100
  })
  password: string;

  @ManyToMany(() => Rouge, rouge => rouge.users)
  rouges?: Rouge[]
}