import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx'
@Injectable()
export class SwapiService{
 peopleNames: string[]=[] ;
 constructor(private http: Http){}

  getPeople(){
    return this.http.get('http://swapi.co/api/people/').map(
      (response: Response) =>{
        const data = response.json();
        return data.results;
      }
    );
  }

  getPersonWithId(id:number){
    return this.http.get('http://swapi.co/api/people/'+id+'/').map(
      (response: Response) =>{

        const data = response.json();
        //console.log(data)
        return data;
      }

    );
  }

}
