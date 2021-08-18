import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  constructor(id) {
    this.id = id;
  }
  @PrimaryGeneratedColumn()
  id: number;
}
