import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { unsplash_creds } from '../../environments/config'
import { UnsplashResponse } from '../models/unsplash';

@Injectable({
  providedIn: 'root'
})
export class PhotoFetcherService {

  constructor(private http: HttpClient) {}

  fetchRandomPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: `Client-ID ${unsplash_creds.access_key}`
      }
    }).pipe(
      map(x => x.urls.small)
    )
  }

}
