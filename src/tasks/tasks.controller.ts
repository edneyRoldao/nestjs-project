import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { CreateTaskDto } from './create-task.dto';
import { TaskFilterDto } from './task-filter.dto';
import { TaskStatusValidationPipe } from './task-status-validation.pipe';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get('/:id')
    getTask(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.tasksService.getTask(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() taskDto: CreateTaskDto): Promise<Task> {
        return this.tasksService.createTask(taskDto);
    }


}
