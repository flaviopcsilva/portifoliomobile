import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  telefone: string;

  @Column({ type: 'date', nullable: true })
  data_nascimento: string;
}
