export class CreateTodoDto {
  name: string;
  remark?: string;
  done?: 0 | 1;
  deadline?: string;
}
