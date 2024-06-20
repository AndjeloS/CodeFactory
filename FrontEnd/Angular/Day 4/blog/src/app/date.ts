import { Injectable } from '@angular/core';
import { IBlog } from './blog-model';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  d: IBlog[] = [];
  constructor() {}
}
