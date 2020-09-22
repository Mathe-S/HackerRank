import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "temperature-converter",
  templateUrl: "./temperatureConverter.component.html",
  styleUrls: ["./temperatureConverter.component.scss"],
})
export class TemperatureConverter implements OnInit {
  valueCelcius = 0;
  valueFarenheit = 0;

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  faren() {
    this.valueCelcius =
      Math.floor((((this.valueFarenheit - 32) * 5) / 9) * 100) / 100;
  }

  cels() {
    this.valueFarenheit =
      Math.floor(((this.valueCelcius * 9) / 5 + 32) * 100) / 100;
    console.log(Math.floor((9 / 5 + 32) * 100) / 100);
  }
}
