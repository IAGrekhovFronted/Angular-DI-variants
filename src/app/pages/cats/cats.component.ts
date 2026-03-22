import { Component, inject } from '@angular/core';
import { CAT_BREEDS } from '../../features/custom-di-token/custom-di.token';
import { CatFactService } from '../../features/service-observable/service-observable.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cats',
  imports: [AsyncPipe],
  templateUrl: './cats.component.html',
  providers: [CatFactService],
})
export class CatsComponent {
  protected catBreeds$ = inject(CAT_BREEDS);
  protected catFact$ = inject(CatFactService);
}
