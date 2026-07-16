import { Component } from '@angular/core';
import { CarCard } from '../../components/car-card/car-card';

@Component({
  selector: 'app-car-list',
  imports: [CarCard],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
})
export class CarList {

  cars = [
    {
      make: "toyota",
      model: "corola",
      year: "2008",
      price: "1000",
      color: "yellow",
      engineSize: "2000",
      doors: 2,
      previousOwner: 4,
      MOT: {
        "2008": "pass",
        "2009": "fail",
        "2010": "pass",
        "2011": "pass",
        "2012": "fail"
      },
      keys: 2,
      Mileage: 45000,
      ulezFree: true,
      lastMotDate: "12thAug2012"
    }, {
      make: "honda",
      model: "corola",
      year: "2008",
      price: "1000",
      color: "white",
      engineSize: "1000",
      doors: 2,
      previousOwner: 4,
      MOT: {
        "2008": "pass",
        "2009": "fail",
        "2010": "pass",
        "2011": "pass",
        "2012": "fail"
      },
      keys: 2,
      Mileage: 45000,
      ulezFree: true,
      lastMotDate: "12thAug2012"
    }, {
      make: "lexus",
      model: "corola",
      year: "2041",
      price: "3000",
      color: "black",
      engineSize: "6000",
      doors: 2,
      previousOwner: 7,
      MOT: {
        "2008": "pass",
        "2009": "fail",
        "2010": "pass",
        "2011": "pass",
        "2012": "fail"
      },
      keys: 2,
      Mileage: 45000,
      ulezFree: false,
      lastMotDate: new Date()
    }, {
      make: "lexus",
      model: "corola",
      year: "2041",
      price: "3000",
      color: "black",
      engineSize: "6000",
      doors: 2,
      previousOwner: 7,
      MOT: {
        "2008": "pass",
        "2009": "fail",
        "2010": "pass",
        "2011": "pass",
        "2012": "fail"
      },
      keys: 2,
      Mileage: 45000,
      ulezFree: false,
      lastMotDate: new Date()
    }, {
      make: "lexus",
      model: "corola",
      year: "2041",
      price: "3000",
      color: "black",
      engineSize: "6000",
      doors: 2,
      previousOwner: 7,
      MOT: {
        "2008": "pass",
        "2009": "fail",
        "2010": "pass",
        "2011": "pass",
        "2012": "fail"
      },
      keys: 2,
      Mileage: 45000,
      ulezFree: false,
      lastMotDate: new Date()
    }

  ]
}
