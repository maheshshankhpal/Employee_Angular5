import { Component, OnInit } from "@angular/core";
import { HomeService } from "./home.service";
import { IfStmt } from "@angular/compiler";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  data: any;
  options: any;
  dashboardMetaData: any;

  arrStateName: string[] = [];
  arrExcelCount: number[] = [];
  arrSheetCount: number[] = [];
  arrayReportCatalog: number[] = [];
  arrayReportPending: number[] = [];
  arrayMappingDone: number[] = [];
  arrayMappingPending: number[] = []
  totalAnalysisMETA: any;
  tempDashboardMeta: any;
  StateMasterData: any;
  selectedStates: any[];


  /**
   * it will display Dashboard Data 
   */
  constructor(private _HomeService: HomeService) {
    this.options = {
      title: {
        display: true,
        text: 'Analysis Of Reports',
        fontSize: 16
      },
      legend: {
        position: 'top'
      }
    };
  }
  ngOnInit() {
    this.GetDashBoardData();
  }


  GetDashBoardData() {
    this._HomeService.getDashboardMetaData().subscribe(data => {
      let resp = JSON.parse(data);
      if (resp.data.hasOwnProperty('chartfilterStarte')) {
        this.StateMasterData = resp.data.chartfilterStarte;
      }
      if (resp.data.hasOwnProperty('totaL_COUNT')) {
        this.totalAnalysisMETA = resp.data.totaL_COUNT[0];
      }
      if (resp.data.hasOwnProperty('dashboarD_DTLS')) {
        this.dashboardMetaData = resp.data.dashboarD_DTLS;
        this.tempDashboardMeta = resp.data.dashboarD_DTLS;
        this.AssignForSpecificDashboardData();
      }
    });
  }
  AssignForSpecificDashboardData() {
    if (this.dashboardMetaData) {
      this.dashboardMetaData.forEach(element => {
        this.arrStateName.push(element.statenames);
        this.arrExcelCount.push(element.excel_Upload);
        this.arrSheetCount.push(element.nO_OF_SHEET);
        this.arrayReportCatalog.push(element.report_Cat_Count);
        this.arrayReportPending.push(element.report_Cat_Pending_Count);
        this.arrayMappingDone.push(element.mapped);
        this.arrayMappingPending.push(element.unmapped);

      });
      this.AssignMetaDataToLineChartData();
    }
  }
  AssignMetaDataToLineChartData() {
    this.data = {
      labels: this.arrStateName,
      datasets: [
        {
          label: 'No. Uploaded Excel',
          backgroundColor: '#42A5F5',
          borderColor: '#42A5F5',
          data: this.arrExcelCount
        },
        {
          label: 'No. of Sheet Identify',
          backgroundColor: '#9CCC65',
          borderColor: '#9CCC65',
          data: this.arrSheetCount
        },
        {
          label: 'No. of Reports Created',
          backgroundColor: 'pink',
          borderColor: 'pink',
          data: this.arrayReportCatalog
        },
        {
          label: 'No. of Reports Pending for Creation',
          backgroundColor: 'orange',
          borderColor: 'orange',
          data: this.arrayReportPending
        },
        {
          label: 'No. of Reports Mapping Done',
          backgroundColor: 'yellow',
          borderColor: 'yellow',
          data: this.arrayMappingDone
        },
        {
          label: 'No. of Reports Mapping Pending',
          backgroundColor: 'red',
          borderColor: 'red',
          data: this.arrayMappingPending
        }
      ]
    }
  }
  FilterByStates() {
    this.arrStateName = [];
    this.arrExcelCount = [];
    this.arrSheetCount = [];
    this.arrayReportCatalog = [];
    this.arrayReportPending = [];
    this.arrayMappingDone = [];
    this.arrayMappingPending = [];



    if (this.selectedStates.length > 0) {
      this.dashboardMetaData = [];
      this.selectedStates.forEach(element => {
        let stateData = this.tempDashboardMeta.filter(x => x.statenames == element);
        this.dashboardMetaData.push(stateData[0]);

      });
    } else {
      this.dashboardMetaData = this.tempDashboardMeta;
    }
    this.AssignForSpecificDashboardData();

  }



}
