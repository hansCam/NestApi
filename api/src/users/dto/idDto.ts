import { IsNotEmpty } from 'class-validator';

export class iDValidateResetRequest {
  @IsNotEmpty()
  id: string;
}
