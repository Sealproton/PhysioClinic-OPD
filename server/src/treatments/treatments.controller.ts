import { Controller } from '@nestjs/common';
import { TreatmentsService } from './treatments.service';
@Controller('treatments')
export class TreatmentsController {
  constructor(private txService: TreatmentsService){}
}
