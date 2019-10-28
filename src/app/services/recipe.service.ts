import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IRecipe } from '../models/recipe.model';

@Injectable()
export class RecipeService {

    getRecipes():IRecipe[] {
        return RECIPES;
    }

    getRecipe(id:number): IRecipe {
        return RECIPES.find(recipe => recipe.id === id);
    }

//   constructor(private http:HttpClient) { }

//   getRecipes():Observable<any[]> {
//       return this.http.get(endpoint)
//         .pipe(catchError(this.handleError<any[]>('getRecipes',[])))
//   }

//   add(recipe): Observable<any> {
//       return this.http.post(endpoint, JSON.stringify(recipe),httpOptions);
//   }

//   private handleError<T> (operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
  
//       // TODO: send the error to remote logging infrastructure
//       console.error(error); // log to console instead
  
//       // TODO: better job of transforming error for user consumption
//       console.log(`${operation} failed: ${error.message}`);
  
//       // Let the app keep running by returning an empty result.
//       return of(result as T);
//     };
//   }

}

// const endpoint = 'http://localhost:8080/recipe';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json'
//   })
// };

const RECIPES = [
    {
        "id": 1,
        "name": "Chicken Curry",
        "description": "Chicken curry",
        "servingsize": "4",
        "instructions": [
          "Add Chicken",
          "Add curry in the basket"
        ],
        "ingredients": [
          {
            "ingredient": "Chicken",
            "quantity": "1 lbs"
          }
        ]
      },
      {
        "id": 2,
        "name": "Stephan Curry",
        "description": "Stephen Currys curry",
        "servingsize": "2",
        "instructions": [
          "Add Stephen in the basket",
          "Add curry in the basket"
        ],
        "ingredients": [
          {
            "ingredient": "Chicken",
            "quantity": "3 lbs"
          }
        ]
      },
      {
        "instructions": [
          "asfd"
        ],
        "ingredients": [
          {
            "ingredient": "asdc",
            "quantity": "2"
          }
        ],
        "name": "asdf",
        "description": "asfd",
        "servingsize": "2",
        "id": 5
      },
      {
        "name": "svqef",
        "description": "2aadf",
        "servingsize": "2a",
        "id": 6
      },
      {
        "instructions": [
          "asdf"
        ],
        "ingredients": [
          {
            "ingredient": "asdfw",
            "quantity": "2"
          }
        ],
        "name": "test",
        "description": "asdf",
        "servingsize": "2",
        "id": 7
      },
      {
        "instructions": [
          "asaf"
        ],
        "ingredients": [
          {
            "ingredient": "dfge",
            "quantity": "5f"
          }
        ],
        "name": "asdqwe",
        "description": "asdczcsd",
        "servingsize": "3",
        "id": 8
      },
      {
        "instructions": [
          "Do Something"
        ],
        "ingredients": [
          {
            "ingredient": "Something",
            "quantity": "50 lbs"
          }
        ],
        "name": "New Recipe",
        "description": "some desc",
        "servingsize": "10",
        "id": 9
      }
    
]