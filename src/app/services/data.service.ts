// import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: Http) { }
  getAll() {
    return this.http.get(this.url)
      .pipe(map(res => res.json()));
  }

  getOne(id) {
    return this.http.get(this.url+'/'+id)
      .pipe(map(res => res.json()));
  }

  create(resource) {
    return this.http.post(this.url, resource)
      .pipe(map(res => res.json()));
  }
}
