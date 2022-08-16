import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import _const from './constants'

interface WikiResult {
  query: {
    search: {
      title: string
      wordcount: number
      snippet: string
      pageid: number
    }[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(term: string) {
    return this.http.get<WikiResult>(_const.wiki.search_url, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      map(x => x?.query?.search)
    )
  }
}
