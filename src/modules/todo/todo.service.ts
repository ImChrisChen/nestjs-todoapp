import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
    private readonly dataSource: DataSource,
  ) {}

  create(createTodoDto: CreateTodoDto) {
    const { name, remark, deadline, done } = createTodoDto;
    const res = this.todoRepository.create({ name, remark, deadline, done });
    return this.todoRepository.save(res);
  }

  findAll() {
    return this.todoRepository.find();
  }

  findOne(id: number) {
    return this.todoRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoRepository.findOneBy({ id }).then((todo) => {
      const data = { ...todo, ...updateTodoDto };
      return this.todoRepository.save(data);
    });
  }

  remove(id: number) {
    return this.todoRepository.delete(id);
  }
}
