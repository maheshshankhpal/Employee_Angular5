import { Injectable } from '@angular/core';
import { ApiHandler } from '../../../providers/api-handler.service';
import { NgProgress } from 'ngx-progressbar';
import { Observable } from 'rxjs';
import { RequestMethod } from '@angular/http';

@Injectable()
export class SidebarService {

    constructor(private _apiHandler: ApiHandler, 
        public ngProgress: NgProgress) {
    }

    getCrismacMenu(): Observable<string> {
        this.ngProgress.done();
        this.ngProgress.start();
        return this._apiHandler.callService('/api/Menu/getCrisMacMenu', RequestMethod.Get)
            .map(res => <string>res.text())
            .do((result: string) => {
                this.ngProgress.done();
            });
    }

}
