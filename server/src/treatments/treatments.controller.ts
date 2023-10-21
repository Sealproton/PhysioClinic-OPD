import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { TreatmentsService } from './treatments.service';
import { CreateTreatmentDto } from './dtos/create-treatment.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
@Controller('treatments')
@UseGuards(AuthGuard)
export class TreatmentsController {
  constructor(private txService: TreatmentsService) {}
  @Post('/create/:pt_id')
  createTreatment(@Body() body: CreateTreatmentDto, @Param() { pt_id }) {
    const result = this.txService.createTx(Number(pt_id), body);
    return result;
  }
}
