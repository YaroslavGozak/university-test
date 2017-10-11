import { Injectable } from "@angular/core"
import { Http } from "@angular/http"

import 'rxjs/add/operator/toPromise';

import { Test, Question, Answer } from "../models/main-models"

@Injectable()
export class TestsService {
    private testUrl = "api/tests";

    constructor (private http: Http) { }

    public getAllTests(): Promise<Test[]> {
        return this.http.get(this.testUrl)
            .toPromise()
            .then(response => response.json() as Test[])
            .catch(response => {
                console.error("Error in response:");
                console.error(response);
                return Promise.reject(response);
            });
    }

    public getTest(id: number): Promise<Test> {
        return this.http.get(this.testUrl + '/' + id)
            .toPromise()
            .then(response => response.json() as Test)
            .catch(err => {
                console.error("getTest: Error in request");
                console.error(err);
            });
    }
}
