import { Component, OnInit, ElementRef } from '@angular/core';
import { CalcForm } from '../calc-form';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public formSubmitted = false;
  public title: string = 'Tip Calculator';
  public tipDropDown: number[] = [10, 15, 18, 20, 25];
  tipHasError: boolean = true;

  formModel = new CalcForm(null, 'default', null);

  // public billTotal: number;
  // public partySize: number = null;
  public calcTip: number;
  public calculatedBill: number;

  validateTip(value) {
    if (value === 'default') {
      this.tipHasError = true;
    } else {
      this.tipHasError = false;
    }
  }

  calculateTip(tip, total) {
    var tipAmount: number;
    
    tipAmount = total * tip;
    console.log('tip amount =>', tipAmount);

    return tipAmount
  }

  calculateBillTotal() {
    let tip = Number((Number(this.formModel.selectedTip)/100).toFixed(2))
    let total = Number(this.formModel.billTotal)
    let partySize = this.formModel.partySize
    this.calcTip = this.calculateTip(tip, total)
    const finalBill = total + this.calcTip

    if (partySize === null) {
      this.calculatedBill = finalBill
    } else {
      this.calculatedBill = finalBill / partySize;
    }
    this.formSubmitted = true;
    console.log('finalTotal =>', this.calculatedBill)
  }

  action() {
    console.log("form model =>", this.formModel)
    this.calculateBillTotal();
  }

  constructor() { }

  ngOnInit() {
  }

}
