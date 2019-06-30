import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './create-task.dto';
import { TaskFilterDto } from './task-filter.dto';
import { TaskStatusValidationPipe } from './task-status-validation.pipe';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get()
    list(): Task[] {
        return this.tasksService.listTasks();
    }

    @Get()
    filteredList(@Query(ValidationPipe) filter: TaskFilterDto): Task[] {
        if (Object.keys(filter).length) {
            return this.tasksService.filterList(filter);
        }

        return this.tasksService.listTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id: string) {
        return this.tasksService.getTask(id);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        this.tasksService.deleteTask(id);
    }

    // we can get a whole body from request
    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() taskDto: CreateTaskDto) {
        return this.tasksService.createTask(taskDto);
    }

    @Post('/v2')
    createTask2(@Body('title') title,
                @Body('description') description) {
        return this.tasksService.createTask2(title, description);
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id') id: string,
                     @Body('status', TaskStatusValidationPipe) status: TaskStatus): Task {
        return this.tasksService.updateTaskStatus(id, status);
    }

}
