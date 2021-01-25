import { Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

import { SnackBarTipComponent } from './contact/snack-bar-tip/snack-bar-tip.component';
import { AlertDialogComponent } from './contact/alert-dialog/alert-dialog.component';
import { EditGroupDialogComponent } from './contact/edit-group-dialog/edit-group-dialog.component';
import { EditContactDialogComponent } from './contact/edit-contact-dialog/edit-contact-dialog.component';
import { ShowSelectReceiverComponent } from './contact/show-select-receiver/show-select-receiver.component';
import { SelectReceiverComponent } from './contact/select-receiver/select-receiver.component';
import { FilterSearchPipe } from './contact/pipe/filter-search.pipe';
import { FilterGroupPipe } from './contact/pipe/filter-groups.pipe';
import { createCustomElement } from '@angular/elements';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    SelectReceiverComponent,
    ShowSelectReceiverComponent,
    FilterSearchPipe,
    FilterGroupPipe,
    EditContactDialogComponent,
    EditGroupDialogComponent,
    AlertDialogComponent,
    SnackBarTipComponent,
    TestComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, MatIconModule, MatAutocompleteModule,
    MatDialogModule, MatExpansionModule, FlexLayoutModule, MatTooltipModule,
    MatCheckboxModule, MatSnackBarModule, FormsModule,
  ],
  providers: [],
  bootstrap: [], // build 的时候去掉，测试的时候加上 TestComponent
  entryComponents: [ShowSelectReceiverComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SRModule {

  contacts: any[];
  contactGroups: any[];
  options;

  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {
    const SelectReceiverElement = createCustomElement(ShowSelectReceiverComponent, {injector: this.injector});
    customElements.define('ng-select-receiver', SelectReceiverElement);
  }

}
