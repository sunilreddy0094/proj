import { Component, OnInit } from '@angular/core';
import {SwapiService} from "../swapi.service";
import {ActivatedRoute} from "@angular/router";
import {Person} from "../person.model";

@Component({
  selector: 'app-swapi-person-component',
  templateUrl: './swapi-person-component.component.html',
  styleUrls: ['./swapi-person-component.component.css']
})
export class SwapiPersonComponentComponent implements OnInit {

  id:number;
 person:Person = new Person(null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null);
  constructor(private swapiService:SwapiService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      this.swapiService.getPersonWithId(this.id).subscribe(
        (person:any) => {

          this.person.name=person.name;
          this.person.height=person.height;
          this.person.mass=person.mass;
          this.person.hair_color=person.hair_color;
          this.person.skin_color=person.skin_color;
          this.person.eye_color=person.eye_color;
          this.person.birth_year=person.birth_year;
          this.person.gender=person.gender;
          this.person.homeworld=person.homeworld;
          this.person.films=person.films;
          this.person.species=person.species;
          this.person.vehicles=person.vehicles;
          this.person.starships=person.starships;
          this.person.created=person.created;
          this.person.edited=person.edited;
          this.person.url=person.url;


          console.log(this.person);
        });
    });

  }

}
