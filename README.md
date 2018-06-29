# MultiSelectComponent

A simple Multi Select Component for web applications. This has been developed in Angular 5.

## Getting Started

## Features

*   Checkbox controlled component
*   Binds to custom data source
*   Select/De-Select all Items
*   Selected items are available as output event

## Installation

npm install angular5-multiselectcheckbox

Once installed using npm, import the module in app.module.ts as shown below:

import { MultiSelectModule } from 'angular5-multiselectcheckbox'

@NgModule({
    declarations: [
  ],
  imports: [
    MultiSelectModule
  ]
})
export class AppModule { }

## Usage

HTML File

<app-multi-select [data]="data" [hideAll]="false" (onItemSelected)="anyCustomMethod($event)"></app-multi-select>

data: 
Pass the data in the form of a Key - Value pair of (Id, Value)

hideAll:
Pass the value as 'false' to display the ALL option
Pass the value as 'true' to hide the ALL option

onItemSelected:
This event emits the selected values.

Component File

data = [
    {
      'Id': '01',
      'Value': 'Value1'
    },
    {
      'Id': '02',
      'Value': 'Value2'
    },
    {
      'Id': '03',
      'Value': 'Value3'
    }
  ];


