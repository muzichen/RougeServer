import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: "bigint"
  })
  id: string;

  @Column({
    type: "varchar",
    nullable: false,
    unique: true
  })
  name: string;

  @Column({
    type: "varchar",
    nullable: true,
    unique: false
  })
  description: string;
}