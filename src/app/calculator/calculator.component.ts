import { Component, OnInit, ElementRef } from '@angular/core';
import { CalcForm } from '../calc-form';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public title: string = 'Tip Calculator';
  public tipDropDown: number[] = [10, 15, 18, 20, 25];

  formModel = new CalcForm(null, 15, null);

  // public billTotal: number;
  // public partySize: number = null;
  public calcTip: number;
  public calculatedBill: number;


  calculateTip() {
    console.log('tip')
  }

  calculateBillTotal() {
    console.log('finalTotal')
  }

  action() {
    this.calculateTip();
    this.calculateBillTotal();
    console.log(this.formModel)
  }

  constructor() { }

  ngOnInit() {
  }

}
