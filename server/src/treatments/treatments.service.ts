import { Injectable } from '@nestjs/common';

@Injectable()
export class TreatmentsService {
  constructor(private repo: TreatmentsService) {}
}
