//this service used to featch the all employee from server
//import injectable
//injectable used to create custome service

import {Injectable} from "@angular/core"

//to make async calls.
import {HttpClient} from "@angular/common/http"

import BASE_URL from "../config/restAPIs/restAPI"
//to make service as global need to use providedIn
@Injectable(
    {
        providedIn:"root"
    }
)