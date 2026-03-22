import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { CAT_INFO_BASE_URL, CAT_INFO_SLUGS } from '../constans';
import { CatFact } from '../models';

@Injectable()
export class CatFactService extends Observable<string> {
  constructor(private readonly http: HttpClient) {
    super((sub) => {
      const url = [CAT_INFO_BASE_URL, CAT_INFO_SLUGS.fact].join('/');
      this.http
        .get<CatFact>(url)
        .pipe(
          shareReplay({ bufferSize: 1, refCount: true }),
          map((info) => info.fact),
        )
        .subscribe(sub);
    });
  }
}
