import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PayInfo } from '../app/models/payinfo.ts'
   
@Injectable({
	providedIn : 'root'

})
export class HttpService{
    constructor(private http: HttpClient){ }
	postPayInfo(user: PayInfo) {
	    //const body = { name: user.name, age: user.age }
	    return this.http.post('http://localhost:8000/api/json', user)
	}
}