import { Injectable } from '@angular/core';
import { ApiHandler } from '../../providers/api-handler.service';
import { Observable } from 'rxjs';
import { RequestMethod } from '@angular/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgProgress } from 'ngx-progressbar';
@Injectable()

export class HomeService {
    public message: string;

    constructor(private _apiHandler: ApiHandler, private spinner: NgxSpinnerService, 
        public ngProgress: NgProgress) {
    }

    getDashboardMetaData(): Observable<string> {
        this.ngProgress.done();
        this.ngProgress.start();

        return this._apiHandler.callService('/api/Dashboard/getDashboarddisplayDetails', RequestMethod.Get)
            .map(res => <string>res.text())
            .do((result: string) => {
                this.ngProgress.done();

            });
    }
}
