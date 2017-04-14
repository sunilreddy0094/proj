import { Component, OnInit } from '@angular/core';
import {SwapiService} from "./swapi.service";
import {Response } from '@angular/http'
import {Person} from "./person.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-swapi-component',
  templateUrl: './swapi-component.component.html',
  styleUrls: ['./swapi-component.component.css']
})
export class SwapiComponentComponent implements OnInit {

  names: [string] = [''];
  person: Person;
  constructor(private swapiService:SwapiService,private rouer:Router) { }

  ngOnInit() {
    this.swapiService.getPeople().subscribe(
      (people: any[]) =>{

        for( let person of people){
          this.names.push(person.name.toString());

        }

      },
          (error) => console.log(error)
      );

    this.names.splice(0);
    console.log(this.names)
  }
  onSelectedPerson(ix:number){

    this.rouer.navigate(['swapi',ix+1]);

  }
}
