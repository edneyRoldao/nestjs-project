import { TaskRepository } from './task.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './create-task.dto';
import { TaskFilterDto } from './task-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {

    constructor(@InjectRepository(TaskRepository) private repository: TaskRepository) { }

    async getTask(id: number): Promise<Task> {
        const task = await this.repository.findOne(id); // it is a promise

        if (!task) {
            throw new NotFoundException(`task with id ${id} not found`);
        }

        return task;
    }

    async createTask(taskDto: CreateTaskDto): Promise<Task> {
        const { title, description } = taskDto;

        const task = new Task();

        task.title = title;
        task.description = description;
        task.TaskStatus = TaskStatus.OPEN;

        await task.save();

        return task;
    }


}
