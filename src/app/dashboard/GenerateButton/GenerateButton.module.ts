import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateButtonComponent } from './GenerateButton.component';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { GrowlModule } from 'primeng/growl';
import { MatExpansionModule, MatDialogModule, MatCheckboxModule, MatIconModule, MatCardModule, MatTableModule, MatButtonModule, MatTooltipModule } from '@angular/material';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,NgxSpinnerModule, ButtonModule, MatExpansionModule, MatDialogModule, MatCheckboxModule, MatIconModule, 
    MatCardModule, MatTableModule, MessagesModule, MessageModule, GrowlModule, MatButtonModule, MatTooltipModule
    ,DropdownModule ,FormsModule
  ],
  declarations: [GenerateButtonComponent],
  exports: [GenerateButtonComponent]
})
export class GenerateButtonModule { }
