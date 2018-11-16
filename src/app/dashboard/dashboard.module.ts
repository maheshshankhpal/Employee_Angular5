import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { dashboardRoutes } from "./dashboard.routes";

import { NavbarComponent } from "./dashboard/navbar/navbar.component";
import { SidebarComponent } from "./dashboard/sidebar/sidebar.component";
import { Common_btn_templateComponent } from "../commoncomponent/common_btn_template/common_btn_template.component";
import { CommonDirectiveDirective } from "../commoncomponent/CommonDirective.directive";

// Material

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSelectModule,
  MatListModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatChipsModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatTreeModule
} from "@angular/material";
import {
  MatExpansionModule,
  MatDialogModule,
  MatCheckboxModule,
  MatIconModule,
  MatCardModule,
  MatTableModule
} from "@angular/material";
import { DndListModule } from "ngx-drag-and-drop-lists";

// Ng Prime Components Start
import { DataViewModule } from "primeng/dataview";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextModule } from "primeng/inputtext";
import { ListboxModule } from "primeng/listbox";

import { ButtonModule } from "primeng/button";
import { MessageService } from "primeng/components/common/messageservice";
import { GrowlModule } from "primeng/growl";
import { MultiSelectModule } from "primeng/multiselect";
import { ToolbarModule } from "primeng/toolbar";
import { SplitButtonModule } from "primeng/splitbutton";
import { AutoCompleteModule } from "primeng/autocomplete";
import { FileUploadModule } from "primeng/fileupload";
import { PanelModule } from "primeng/panel";
import { AccordionModule } from "primeng/accordion";

import { TableModule } from "primeng/table";
import { SelectButtonModule } from "primeng/selectbutton";
import { CalendarModule } from "primeng/calendar";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { ToastModule } from "primeng/toast";

// Ng Prime End

import { TextboxModule } from "../commoncomponent/textbox/textbox.module";

import { SignalRGroupsComponent } from "./SignalRGroups/SignalRGroups.component";
import { GlobalService } from "./Global.service";
import { GenerateButtonModule } from "./GenerateButton/GenerateButton.module";
import { DataTableModule } from "../data-table";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgProgressModule } from "ngx-progressbar";
import { StateofpageGuard } from "../guards/stateofpage.guard";
import { AutocompleteModule } from "../commoncomponent/autocomplete/autocomplete.module";
import { UserMenuComponent } from "./dashboard/user-menu/user-menu.component";
import { SidebarService } from "./dashboard/sidebar/sidebar.service";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataViewModule,
    DialogModule,
    InputTextModule,
    AutoCompleteModule,
    MultiSelectModule,
    AccordionModule,
    DropdownModule,
    ButtonModule,
    SplitButtonModule,
    ListboxModule,
    CheckboxModule,
    ToolbarModule,
    GrowlModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    FileUploadModule,
    PanelModule,
    BrowserAnimationsModule,
    DndListModule,
    MatExpansionModule,
    MatDialogModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatAutocompleteModule,
    TextboxModule,
    MatTableModule,
    TableModule,
    SelectButtonModule,
    CalendarModule,
    MessagesModule,
    MessageModule,
    MatRadioModule,
    MatChipsModule,
    ConfirmDialogModule,
    GenerateButtonModule,
    DataTableModule,
    NgxSpinnerModule,
    NgProgressModule,
    MatTooltipModule,
    ToastModule,
    MatSlideToggleModule,
    AutocompleteModule,
    MatTreeModule,
    PerfectScrollbarModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  providers: [
    MessageService,
    GlobalService,
    ConfirmationService,
    StateofpageGuard,
    SidebarService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  declarations: [
    DashboardComponent,
    SignalRGroupsComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    Common_btn_templateComponent,
    CommonDirectiveDirective,
    UserMenuComponent,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {}
