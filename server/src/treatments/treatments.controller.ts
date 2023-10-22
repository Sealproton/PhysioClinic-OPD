import { Body, Controller, Param, Post, UseGuards, Get } from '@nestjs/common';
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
  @Get('/single/:tx_id')
  getSingleTreatments(@Param() { tx_id }) {
    const result = this.txService.getSingleTx(tx_id);
    return result;
  }
  @Get('/:pt_id')
  getAllTreatments(@Param() { pt_id }) {
    const result = this.txService.getAllTx(pt_id);
    return result;
  }
}
