import { Component } from '@angular/core';
import { CombinedCount } from '../../Services/combined-count';

@Component({
  selector: 'total-count',
  standalone: false,
  templateUrl: './total-count.html',
  styleUrl: './total-count.css',
})
export class TotalCount {
  total:number = 0
  constructor(private finalcount:CombinedCount){
   this.total = this.finalcount.totalCount()
  }
  


}
