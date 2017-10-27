import { Component, OnInit } from '@angular/core';
import { Test, Question, Answer} from './models/main-models';
import { HttpModule }           from '@angular/http';
import { TestsService } from './services/tests.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private tests: Test[];
    private results: number[];
    private selectedTest: Test;
    private currentQuestion: number;
    constructor(private testService: TestsService,
        private router: Router) { }
    //this.items = this.testService.getData();
    ngOnInit() {
        this.testService.getAllTests().then(data => this.tests = data);
    }
    selectTest(test: Test) {

        this.currentQuestion = 0;
        this.selectedTest = test;
        this.router.navigate(['/test', test.testID]);
    }
}
