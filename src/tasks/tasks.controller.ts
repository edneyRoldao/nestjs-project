import { Controller, Get, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './create-task.dto';
import { TaskFilterDto } from './task-filter.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get()
    list(): Task[] {
        return this.tasksService.listTasks();
    }

    @Get()
    filteredList(@Query() filter: TaskFilterDto): Task[] {
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
    createTask(@Body() taskDto: CreateTaskDto) {
        console.log('body:', taskDto);        
        return this.tasksService.createTask(taskDto);
    }

    // we can get each property from body individually
    @Post('/v2')
    createTask2(@Body('title') title,
                @Body('description') description) {
        console.log(title);
        console.log(description);
        return this.tasksService.createTask2(title, description);
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id') id: string,
                     @Body('status') status: TaskStatus): Task | null {
        return this.tasksService.updateTaskStatus(id, status);
    }

}
