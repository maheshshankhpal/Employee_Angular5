import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

import { Subject } from 'rxjs/Subject';

export class ConnectedUserData {
    public UserName: String = "";
    public ConnectionStatus: boolean;
}

export class GroupByData {
    public GroupBy: any[] = []
}
export class OrderByData {
    public OrderBy: any[] = []
}
export class GroupByOrderBy {
    public FreeZedDataFields: any[] = [];
}

export class RowBreakData {
    public rows: {};
}

export class PageState {
    public iscurrentState: boolean = false;
}

@Injectable()
export class GlobalService {

    //For SignalR Connection Status
    ConnectedUserData: Subject<ConnectedUserData> = new Subject();
    get ConnectedUser(): Subject<ConnectedUserData> {
        return this.ConnectedUserData;
    }
    set ConnectedUser(src: Subject<ConnectedUserData>) {
        this.ConnectedUserData = src;
    }
    //For GroupBy Collectuion 
    GroupByOrderBy: Subject<GroupByOrderBy> = new Subject();
    get GroupByOrderByData(): Subject<GroupByOrderBy> {
        return this.GroupByOrderBy;
    }
    set GroupByOrderByData(src: Subject<GroupByOrderBy>) {
        this.GroupByOrderBy = src;
    }
    //For Row Breaking  Collectuion 
    RowBreakData: Subject<RowBreakData> = new Subject();
    get RowBreaking(): Subject<RowBreakData> {
        return this.RowBreakData;
    }
    set RowBreaking(src: Subject<RowBreakData>) {
        this.RowBreakData = src;
    }
    // For GroupBy Data only
    GroupByData: Subject<GroupByData> = new Subject();
    get GroupBy(): Subject<GroupByData> {
        return this.GroupByData;
    }
    set GroupBy(src: Subject<GroupByData>) {
        this.GroupByData = src;
    }
    // For OrderBy Data only
    OrderByData: Subject<OrderByData> = new Subject();
    get OrderBy(): Subject<OrderByData> {
        return this.OrderByData;
    }
    set OrderBy(src: Subject<OrderByData>) {
        this.OrderByData = src;
    }

    // Page State with Data
    PageState: Subject<PageState> = new Subject();
    get PageStateData(): Subject<PageState> {
        return this.PageState;
    }
    set PageStateData(src: Subject<PageState>) {
        this.PageStateData = src;
    }

    constructor() { }
    // Methods For Live data transfer 
    ChangeUserStatus(user: ConnectedUserData) {
        this.ConnectedUser.next(user);
    }

    UpdateGroupByData(groupOrderby: GroupByOrderBy) {
        this.GroupByOrderByData.next(groupOrderby);
    }

    UpdateRowBreakingData(rows: RowBreakData) {
        this.RowBreaking.next(rows);
    }

    UpdateGroupBy(gropby: GroupByData) {
        this.GroupBy.next(gropby);
    }

    UpdateOrderBy(orderby: OrderByData) {
        this.OrderBy.next(orderby);
    }

    UpdatePageState(state: PageState) {
        this.PageStateData.next(state);
    }

    search(arr, s) {
        var matches = [], i, key;
        var lookup = {};
        var result = [];

        for (i = arr.length; i--;) {
            for (key in arr[i]) {
                if (key != 'tableName' && arr[i][key] != null) {
                    const Key = arr[i].hasOwnProperty(key);
                    var value = arr[i][key].toString();
                    value = value.toLowerCase().indexOf(s.toLowerCase().trim());

                    if (Key && value > -1) {
                        if (matches.length > 0) {
                            if (!containsObject(arr[i], matches)) {
                                matches.push(arr[i]);
                            }
                        } else {
                            matches.push(arr[i]);
                        }
                    }
                }
            }
        }
        function containsObject(obj, list) {
            var j;
            for (j = 0; j < list.length; j++) {
                if (list[j] === obj) {
                    return true;
                }
            }
            return false;
        }

        return matches;
    };

    public exportAsExcelFile(json: any[], excelFileName: string): void {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }

    private saveAsExcelFile(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
}
