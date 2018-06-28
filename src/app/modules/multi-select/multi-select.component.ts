import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  @Input() data: any;
  @Input() hideAll: boolean;
  @Output() onItemSelected = new EventEmitter<any>();
  selectedItems;
  isAllSelected = false;

  constructor() { }

  ngOnInit() {
  }

  selectAllItems(event) {
    this.isAllSelected = event.target.checked;
    this.data.forEach((item) => {
      item.Selected = event.target.checked;
    });
    this.getSelectedItems();
  }

  selectItem(event, item) {
    this.data.find((x) => x.Id === item.Id).Selected = event.target.checked;
    let unselectedValues = this.data.filter((x) => !x.Selected);
    if (unselectedValues.length > 0) {
      this.isAllSelected = false;
    }
    this.getSelectedItems();
  }

  getSelectedItems() {
    let allSelectedItems = this.data.filter((item) => item.Selected);
    this.onItemSelected.emit(allSelectedItems);
  }

}
