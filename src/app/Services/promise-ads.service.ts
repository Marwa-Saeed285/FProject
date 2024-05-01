import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromiseAdsService {
 ads:string[]
  constructor() { 
    this.ads=[
      'ad number 1',
      'ad number 2',
      'ad number 3',
      'ad number 4',
      'ad number 5',
    ]
  }
CallingObservable(time:number):Observable<string>
{
 return new Observable<string>((obs)=>
  {
    let count=0;
    let timerAds=setInterval(()=>
    {
      if(count==this.ads.length)
        {
          obs.complete();
        }
        else 
          if(this.ads[count]!="")
            {
              obs.next(this.ads[count]);
              count++;

            }       
            else
            obs.error("There is error")
    },time*1000)
  });
}
observableAsFor():Observable<string[]>
{
  return of(this.ads) //بيرجع اراي مش ليست
  //return from(this.ads);
}
}
