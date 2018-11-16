import { debug } from 'util';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import { GenerateButtonService } from './GenerateButton.service';
import { MatDialog } from '@angular/material';
import { environment } from '../../../environments/environment';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiHandler } from '../../providers/api-handler.service';

@Component({
  selector: 'app-GenerateButton',
  templateUrl: './GenerateButton.component.html',
  styleUrls: ['./GenerateButton.component.css']
})
export class GenerateButtonComponent implements OnInit {

  @Input() selectedState: String;
  @Input() ReportID: String;
  @Input() ExcelId: String;
  @Input() excelSheetName: String;
  @Input() filteredreportIdList: any[];
  @Input() reportIdList:any[];
  // @Input() Frequency: string;
  // @Input() Timekey: string;
  userinfo = JSON.parse(localStorage.getItem('userinfo'));
  public msgs: Message[];
  @Input() fileUrl: string = null;

  yearly: any[];
  halfYearly: any[];
  quarterly: any[];
  monthly: any[];
  onMaturity: any[];
  TimekeyList: any[];

  Frequency: string;
  FrequencyName: string;
  TimekeyDt: string;
  Timekey: string;
  _reportIdList : String;
  constructor(private messageService: MessageService,private _GenerateButtonService: GenerateButtonService, private dialog: MatDialog,private _apiHandler: ApiHandler,private spinner: NgxSpinnerService) {

  }

  valueChange(e){
    this.fileUrl = null;
  }

  ngOnInit() {
    debugger;
  }

  onProcess() {
    debugger;
    if (!(this.validateData())) {
      return;
    }
    this._reportIdList="";
    
    
    if(this.ReportID != null && this.ReportID !="" && this.ReportID != undefined)
    {
      this._reportIdList =this.ReportID;
    }

    else if(this.reportIdList != null && this.reportIdList != undefined && this.reportIdList.length>0)
    {
      this.reportIdList.forEach(element => {
        this._reportIdList =this._reportIdList +","+ element.value });
        this._reportIdList=this._reportIdList.slice(1)
    }
    else
    {
      this.filteredreportIdList.forEach(element => {
        this._reportIdList =this._reportIdList +","+ element.value });
        this._reportIdList=this._reportIdList.slice(1)
    }

    console.log(this.ExcelId);
    console.log(this.userinfo.userID);
    console.log(this.Timekey);
    
    this._GenerateButtonService.ExcelWrite(this._reportIdList, this.userinfo.userID, this.Timekey)
      .subscribe((data) => {
        let res = JSON.parse(data);
        if (res.data.result == 1) {
          this.fileUrl = res.data.downloadFilePath;
          this.msgs = [];
         this.messageService.add({ severity: 'success', summary: 'Report Data Added', detail: 'Excel Write Successfuly!!!' });
        } else if (res.data.result == 0) {
          debugger;
          //this.spinner.hide();
          this.fileUrl = null;
          this.msgs = [];
         this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please try again !!' });
        }
      }, error => {
        this.spinner.hide();
        this.fileUrl = null;
        this.msgs = [];
       this.messageService.add({ severity: 'error', summary: 'Error', detail: 'This Report Id is not Mapped properly !!' });
        console.error('auth error', error);
      });
  }

  validateData(): boolean {
    debugger;
    this.msgs = [];

    if (this.selectedState == '' || this.selectedState == null || this.selectedState == undefined) {
     this.messageService.add({ severity: 'error', summary: 'Error', detail: 'State is mandatory.' });
      return false;
    }
    else if (this.ExcelId == '' || this.ExcelId == null || this.ExcelId == undefined) {
     this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Excel Template is mandatory.' });
      return false;
    }
    // else if (this.excelSheetName == '' || this.excelSheetName == null || this.excelSheetName == undefined) {
    //  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Select Excel Sheet is mandatory.' });
    //   return false;
    // }
    // else if (this.ReportID == '' || this.ReportID == null || this.ReportID == undefined) {
    //  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Report ID is mandatory.' });
    //   return false;
    // }
    // else if (this.Frequency == '' || this.Frequency == null || this.Frequency == undefined) {
    //  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Frequency is mandatory.' });
    //   return false;
    // }
    // else if (this.Timekey == '' || this.Timekey == null || this.Timekey == undefined) {
    //  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Timekey is mandatory.' });
    //   return false;
    // }
    else {
      return true;
    }

  }

  getTimekey(): void {
    this._GenerateButtonService
    .GetFrequencyDate().subscribe(data => {
      ;
      let resp = JSON.parse(data);
      if (resp.data.hasOwnProperty('yearly')) {
        this.yearly = resp.data.yearly;
      }
      if (resp.data.hasOwnProperty('halfYearly')) {
        this.halfYearly = resp.data.halfYearly;
      }
      if (resp.data.hasOwnProperty('quarterly')) {
        this.quarterly = resp.data.quarterly;
      }
      if (resp.data.hasOwnProperty('monthly')) {
        this.monthly = resp.data.monthly;
      }
      if (resp.data.hasOwnProperty('onMaturity')) {
        this.onMaturity = resp.data.onMaturity;
      }
    })
  }

}
