import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTable } from './components/table';
import { DataTableColumn } from './components/column';
import { DataTableRow } from './components/row';
import { DataTablePagination } from './components/pagination';
import { DataTableHeader } from './components/header';

import { PixelConverter } from './utils/px';
import { Hide } from './utils/hide';
import { MinPipe } from './utils/min';
import { MatCheckboxModule, MatButtonModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { NgxPaginationModule } from 'ngx-pagination';
import { RowFilterPipe } from './utils/rowfilter';
import { MultiSelectModule } from 'primeng/multiselect';

export * from './components/types';
export * from './tools/data-table-resource';

export { DataTable, DataTableColumn, DataTableRow, DataTablePagination, DataTableHeader };
export const DATA_TABLE_DIRECTIVES = [DataTable, DataTableColumn];


@NgModule({
    imports: [CommonModule, FormsModule, MatCheckboxModule, MatButtonModule, MatTooltipModule,
        MatIconModule,MultiSelectModule,
        NgxPaginationModule, ToolbarModule, DropdownModule],
    declarations: [
        DataTable, DataTableColumn,
        DataTableRow, DataTablePagination, DataTableHeader, RowFilterPipe,
        PixelConverter, Hide, MinPipe
    ],
    exports: [DataTable, DataTableColumn]
})
export class DataTableModule { }
