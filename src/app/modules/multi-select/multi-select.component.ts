import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  @Input() data;
  @Output() onItemSelected = new EventEmitter<any>();
  selectedItems;

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        'Id': '01',
        'Value': 'Name01'
      },
      {
        'Id': '02',
        'Value': 'Name02'
      },
      {
        'Id': '03',
        'Value': 'Name03'
      }];
  }

  selectAllItems(event) {
    console.log('Checked Value: ', event.target.checked);
    this.data.forEach((item) => {
      item.Selected = event.target.checked;
    });
    this.getSelectedItems();
  }

  selectItem(event, item) {
    this.data.find((x) => x.Id === item.Id).Selected = event.target.checked;
    this.getSelectedItems();
  }

  getSelectedItems() {
    let allSelectedItems = this.data.filter((item) => item.Selected);
    this.onItemSelected.emit(allSelectedItems);
  }

}
