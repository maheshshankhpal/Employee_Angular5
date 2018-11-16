import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GlobalService, PageState } from '../dashboard/Global.service';
import { Subject, Observer } from '../../../node_modules/rxjs';
import { ConfirmationService } from '../../../node_modules/primeng/api';


@Injectable()
export class StateofpageGuard implements CanActivate {
  PageState: Subject<PageState>;
  isDataAvailable: boolean = false;
  constructor(private globalService: GlobalService, private confirmationService: ConfirmationService) {
    this.PageState = globalService.PageStateData;
    /***************For PageState Chanage************/
    this.PageState.subscribe(value => {
      this.isDataAvailable = value?true:false;
    });
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.isDataAvailable)
    {
      return Observable.create((observer: Observer<boolean>) => {
        this.confirmationService.confirm({
          message: 'You have unsaved changes. Are you sure you want to leave this page?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.isDataAvailable =false;
            observer.next(true);
            observer.complete();
          },
          reject: () => {
            observer.next(false);
            observer.complete();
          }
        });
      });
    }
    return true;
  }
}
