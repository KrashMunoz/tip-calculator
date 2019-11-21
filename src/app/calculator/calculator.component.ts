import { Component, OnInit, ElementRef } from '@angular/core';
import { CalcForm } from '../calc-form';
import { CalculateService } from '../calculate.service';
import Cleave from 'cleave.js';
// import CleaveOptions from 'cleave.js/options'

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
  // public cleave: Cleave;

   private _cleaveInit() {
    const cleave_bill = new Cleave('.input-bill', {
      numeral: true,
      numeralThousandsGroupStyle: 'none',
      numericOnly: true,
      stripLeadingZeroes: true,
      onValueChanged: function (e) {
        let inp = e.target;
        let value = inp.value;
        let rawValue= inp.value;
        console.log(value, rawValue);
        // e.target = { value: '5100-1234', rawValue: '51001234' }
    }
    });

    const cleave_party = new Cleave('.input-party', {
      numeral: true,
      numeralThousandsGroupStyle: 'none',
      numericOnly: true,
      stripLeadingZeroes: true,
      onValueChanged: function (e) {
        let inp = e.target;
        let value = inp.value;
        let rawValue= inp.value;
        console.log(value, rawValue);
        // e.target = { value: '5100-1234', rawValue: '51001234' }
    }
    });
  }

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
    let tip = Number((Number(this.formModel.selectedTip) / 100).toFixed(2))
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

  constructor(private _calculateService: CalculateService) { }

  onSubmit() {
    console.log("form model =>", this.formModel)
    this.calculateBillTotal();

    this._calculateService.calculate(this.formModel)
      .subscribe(
        data => console.log("Success! =>", data),
        error => console.error("Error! =>", error)
      )
  }

  // Watch Codevolution Angular Forms Tutorial - 11 for more addional examples

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      this._cleaveInit();
    });
  }

}
