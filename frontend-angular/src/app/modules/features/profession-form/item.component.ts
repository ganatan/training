import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemService } from './services/item.service';
import { Item } from './services/item';

import { DEFAULT_ITEM, NAME_ITEM } from './services/item.constants';
import { getCurrentDate } from '../../../shared/utils/date-utils';


@Component({
  selector: 'app-item',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  name_default = NAME_ITEM;
  formItem!: FormGroup;
  item!: Item;
  showDelete = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private itemService: ItemService) {

    this.formItem = this.fb.group({
      id: DEFAULT_ITEM.id,
      name: [DEFAULT_ITEM.name],
      email: [DEFAULT_ITEM.email, [Validators.required]],
      keydownload: [DEFAULT_ITEM.keydownload],
      password: [DEFAULT_ITEM.password],
      passwordConnection: [DEFAULT_ITEM.passwordConnection],
      creationDate: [getCurrentDate()],
      confirmedDate: [DEFAULT_ITEM.confirmedDate],
      signupConfirmedDate: [DEFAULT_ITEM.signupConfirmedDate],
      signupDate: [DEFAULT_ITEM.signupDate],
      unsubscribedDate: [DEFAULT_ITEM.unsubscribedDate],
      confirmed: [DEFAULT_ITEM.confirmed],
      signupConfirmed: [DEFAULT_ITEM.signupConfirmed],
      signup: [DEFAULT_ITEM.signup],
      unsubscribed: [DEFAULT_ITEM.unsubscribed],
      newsletter: [DEFAULT_ITEM.newsletter],
      wrong: [DEFAULT_ITEM.wrong],
      creationDateLanguage: [DEFAULT_ITEM.creationDateLanguage],
      confirmedDateLanguage: [DEFAULT_ITEM.confirmedDateLanguage],
      signupConfirmedDateLanguage: [DEFAULT_ITEM.signupConfirmedDateLanguage],
      signupDateLanguage: [DEFAULT_ITEM.signupDateLanguage],
      unsubscribedDateLanguage: [DEFAULT_ITEM.unsubscribedDateLanguage],
      creationTutorialCode: [DEFAULT_ITEM.creationTutorialCode],
      confirmedTutorialCode: [DEFAULT_ITEM.confirmedTutorialCode],
    });

    this.getItemById();
  }

  onCheckboxClick(type: number, event: any) {
    const isChecked = event.target.checked;
    switch (type) {
      case 1:
        this.updateDate('creationDate', isChecked);
        break;
      case 2:
        this.updateDate('confirmedDate', isChecked);
        break;
      case 3:
        this.updateDate('signupDate', isChecked);
        break;
      case 4:
        this.updateDate('signupConfirmedDate', isChecked);
        break;
      case 5:
        this.updateDate('unsubscribedDate', isChecked);
        break;
    }
  }

  updateDate(dateField: string, isActive: boolean) {
    const control = this.formItem.get(dateField);
    if (control) {
      control.setValue(isActive ? getCurrentDate() : null);
    }
  }

  get name() { return this.formItem.get('name'); }
  get email() { return this.formItem.get('email'); }
  get keydownload() { return this.formItem.get('keydownload'); }
  get password() { return this.formItem.get('password'); }
  get passwordConnection() { return this.formItem.get('passwordConnection'); }
  get creationDate() { return this.formItem.get('creationDate'); }
  get confirmedDate() { return this.formItem.get('confirmedDate'); }
  get signupConfirmedDate() { return this.formItem.get('signupConfirmedDate'); }
  get signupDate() { return this.formItem.get('signupDate'); }
  get unsubscribedDate() { return this.formItem.get('unsubscribedDate'); }
  get confirmed() { return this.formItem.get('confirmed'); }
  get signupConfirmed() { return this.formItem.get('signupConfirmed'); }
  get signup() { return this.formItem.get('signup'); }
  get unsubscribed() { return this.formItem.get('unsubscribed'); }
  get newsletter() { return this.formItem.get('newsletter'); }
  get wrong() { return this.formItem.get('wrong'); }

  getItemById(): void {
    this.route.params
      .subscribe(params => {
        const id = params['id'];
        if (id !== undefined) {
          this.getItem(parseInt(id));
        }
      });
  }

  getItem(id: number): void {
    if (id !== 0) {
      this.itemService.getItem(id)
        .subscribe(item => {
          this.item = item;
          this.setForm(this.formItem, item);
        });
    }
  }

  setForm(form: FormGroup, item: Item) {
    form.setValue(item);
  }

  resetForm() {
    this.formItem.patchValue({
      ...DEFAULT_ITEM,
      creationDate: getCurrentDate(),
    });
  }

  onCreate() {
    this.resetForm();
  }

  onCopy() {
    this.formItem.patchValue({ id: 0 });
  }

  onUpdate() {
    const id = this.formItem.value['id'];
    if (id > 0) {
      this.updateItem(this.formItem.value);
    } else {
      this.createItem(this.formItem.value);
    }
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item)
      .subscribe(dataUpdate => {
        this.setForm(this.formItem, dataUpdate);
      });
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item)
      .subscribe(() => {
        this.resetForm();
      });
  }

  createItem(item: Item) {
    this.itemService.createItem(item)
      .subscribe(data => {
        this.setForm(this.formItem, data);
      });
  }

  onDelete() {
    const id = this.formItem.value['id'];
    if ((id != undefined) && (id != null)) {
      this.deleteItem(this.item);
    }
  }

  /*
  onDelete() {
    this.openDelete();
  }

  openDelete() {
    this.showDelete = true;
  }

  closeDelete() {
    this.showDelete = false;
  }

  confirmDeletion() {
    this.showDelete = false;
    const id = this.formItem.value['id'];
    if ((id != undefined) && (id != null)) {
      this.deleteItem(this.item);
    }
  }
    */


}