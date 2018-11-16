import { Injectable } from '@angular/core';
import { ApiHandler } from '../../providers/api-handler.service';
import { Observable } from 'rxjs';
import { RequestMethod } from '@angular/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgProgress } from 'ngx-progressbar';

@Injectable()

export class GenerateButtonService {
    public message: string;

    constructor(private _apiHandler: ApiHandler,private spinner: NgxSpinnerService) {
    }
// {ReportId}/{UserLoginId}/{TimeKey}
   
    ExcelWrite(reportId, UserId, TimeKey): Observable<string> {
        this.spinner.show();
        return this._apiHandler.callService('/api/ExcelWrite/getexcelwritedata/' + reportId + "/" + UserId + "/" + TimeKey, RequestMethod.Get)
            .map(res => <string>res.text())
            .do((result: string) => {
                this.spinner.hide();
            });
    }

    //GetFrequencyDate
    GetFrequencyDate(): Observable<string> {
        this.spinner.hide();
        this.spinner.show();
        return this._apiHandler.callService('/api/ExcelWrite/GetFrequencyDate', RequestMethod.Get)
            .map(res => <string>res.text())
            .do((result: string) => {
                this.spinner.hide();

            });
    }

}
