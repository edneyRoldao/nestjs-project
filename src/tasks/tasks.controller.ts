import { Task } from './../../dist/tasks/task.model.d';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get()
    list(): Task[] {
        return this.tasksService.listTasks();
    }

    @Post()
    createTask(@Body() body: Task) {
        console.log('body v1:', body);
        return this.tasksService.createTask(body.title, body.description);
    }

    @Post('/v2')
    createTask2(@Body('title') title, @Body('description') description) {
        return this.tasksService.createTask(title, description);
    }

}
