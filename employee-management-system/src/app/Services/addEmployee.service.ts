import {Injectable} from "@angular/core"

//used to connect to server
import {HttpClient} from "@angular/common/http"
import BASE_URL from "../config/restAPIs/restAPI"

import {Observable} from "rxjs"
@Injectable(
    {
        providedIn:"root"
    }
)
export class AddEmployeeService
{
    constructor(public http:HttpClient)
    {

    }

    public addEmployee(data:any):Observable<any>
    {
        return this.http.post(BASE_URL+"insert",data);
    }
}