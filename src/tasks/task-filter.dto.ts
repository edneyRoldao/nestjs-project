import { TaskStatus } from './task.model';
import { IsOptional, IsIn } from 'class-validator';

export class TaskFilterDto {

    @IsOptional()
    @IsIn([TaskStatus.IN_PROGRESS, TaskStatus.DONE, TaskStatus.OPEN])
    status: TaskStatus;

    @IsOptional()
    search: string;

}
