import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { filter } from 'rxjs/internal/operators/filter';

@Injectable({
  providedIn: 'root'
})
export class CommonLibsService {

  subject: BehaviorSubject<{ source: string, destination: string[], data: any }> = new BehaviorSubject({ source: 'common-lib', destination: ['**'], data: 'test' })

  constructor() { }

  public commonData(data: { source: string, destination: string[], data: any }) {
    return this.subject.next(data)
  }

  public readData(host: any): Observable<any> {
    return this.subject.asObservable().pipe(
      filter((d: any) => {
        let x = (d.destination?.some((e: string) => ['**', host].includes(e)))
        delete d.destination;
        return x;
      })
    )
  }
}
