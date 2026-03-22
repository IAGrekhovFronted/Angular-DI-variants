import { inject, InjectionToken } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { Breed, BreedResponse } from '../models';
import { HttpClient } from '@angular/common/http';
import { CAT_INFO_BASE_URL, CAT_INFO_SLUGS } from '../constans';

export const CAT_BREEDS = new InjectionToken<Observable<Array<Breed>>>(
  'Cat Breeds',
  {
    factory: () => {
      const http = inject(HttpClient);
      const url = [CAT_INFO_BASE_URL, CAT_INFO_SLUGS.breeds].join('/');

      return http.get<BreedResponse>(url).pipe(
        shareReplay({ bufferSize: 1, refCount: true }),
        map((res) => res.data),
      );
    },
  },
);
