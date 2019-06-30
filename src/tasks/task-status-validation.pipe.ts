import { TaskStatus } from './task-status.enum';
import { PipeTransform, BadRequestException } from "@nestjs/common";

export class TaskStatusValidationPipe implements PipeTransform {

    readonly allowedStatuses = [
        TaskStatus.DONE,
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
    ];

    transform(value: any) {
        if (this.isStatusNotValid(value)) {
            throw new BadRequestException(`${value} is not a valid status`);
        }

        return value;
    }

    private isStatusValid(status: any) {
        status = status.toUpperCase();
        const i = this.allowedStatuses.indexOf(status);
        return i !== -1;
    }

    private isStatusNotValid(status:any) {
        return !this.isStatusValid(status);
    }

}