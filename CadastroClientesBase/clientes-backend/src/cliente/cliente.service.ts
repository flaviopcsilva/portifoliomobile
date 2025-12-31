import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  create(dto: CreateClienteDto) {
    const cliente = this.clienteRepository.create(dto);
    return this.clienteRepository.save(cliente);
  }

  findAll() {
    return this.clienteRepository.find();
  }

  async update(id: number, dto: UpdateClienteDto) {
    const cliente = await this.clienteRepository.findOneBy({ id });

    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }

    Object.assign(cliente, dto);
    return this.clienteRepository.save(cliente);
  }

  async remove(id: number) {
    const cliente = await this.clienteRepository.findOneBy({ id });

    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }

    await this.clienteRepository.remove(cliente);
    return { message: 'Cliente removido com sucesso' };
  }
}
