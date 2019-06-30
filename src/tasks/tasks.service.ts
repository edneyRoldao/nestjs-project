import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './create-task.dto';
import * as uuid from 'uuid/v1';
import { TaskFilterDto } from './task-filter.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    listTasks(): Task[] {
        return this.tasks;
    }

    filterList(filter: TaskFilterDto): Task[] {
        const { status, search } = filter;

        let tasks = this.tasks.slice();

        if (status) {
            tasks = tasks.filter(task => task.status === status);
        }

        if (search) {
            tasks = tasks.filter((task: Task) => {
                return task.title.includes(search) || task.description.includes(search);
            });
        }

        return tasks;
    }

    getTask(id: string) {
        const task = this.tasks.find((t: Task) => id === t.id);

        if (!task) {
            throw new NotFoundException(`task with id ${id} not found`);
        }

        return task;
    }

    deleteTask(id: string): void {
        const task = this.getTask(id);
        this.tasks = this.tasks.filter((t: Task) => t.id !== task.id);
    }

    updateTaskStatus(id: string, status: TaskStatus): Task | null {
        const task = this.getTask(id);
        task.status = status;
        return task;
    }

    createTask(taskDto: CreateTaskDto): Task {
        const { title, description } = taskDto;

        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };

        this.tasks.push(task);

        return task;
    }

    createTask2(title: string, description: string): Task {
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };

        this.tasks.push(task);

        return task;
    }

}
