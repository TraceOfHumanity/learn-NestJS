import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, BeforeUpdate, BeforeRemove } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id', this.id);
  }

  @BeforeUpdate()
  logUpdate() {
    console.log('Updated User with id', this.id);
  }

  @BeforeRemove()
  logRemove() {
    console.log('Removed User with id', this.id);
  }
}
