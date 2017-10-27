import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ParamMap,  ActivatedRoute } from '@angular/router';
import {Test, Question, Answer} from '../models/main-models';
import { HttpModule }           from '@angular/http';
import { TestsService } from '../services/tests.service';
import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
@Component({
    selector: 'app-test-card',
    templateUrl: './test-card.component.html',
    styleUrls: ['./test-card.component.css'],
    providers: [HttpModule]
})
export class TestCardComponent implements OnInit {
    ticks = 0;

    minutesDisplay: number = 0;
    hoursDisplay: number = 0;
    secondsDisplay: number = 0;

    sub: Subscription;

    private tests: Test[];
    private results: number[];
    private selectedTest: Test;
    private currentQuestion: number;
    private selectedAnswer: number;
    private selectedAnswers: number[]

    constructor(private testService: TestsService, private route: ActivatedRoute) { }
    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) =>
                this.testService.getTest(+params.get('id')))
            .subscribe(test => {
                this.setVariable(test);
                this.startTimer(test.estimatedTime * 60);
            });
    }
    private setVariable(test: Test): void {
        this.selectedTest = test;
        this.currentQuestion = 0;
    }
    private startTimer(seconds: number) {

        let timer = Observable.timer(1, 1000);
        this.sub = timer.subscribe(
            t => {
                this.ticks = seconds - t;
                if (this.ticks == 0) {
                    this.sub.unsubscribe();
                    this.finishTest();
                }

                this.secondsDisplay = this.getSeconds(this.ticks);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.hoursDisplay = this.getHours(this.ticks);
            }
        );
    }
    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }

    private getMinutes(ticks: number) {
        return this.pad((Math.floor(ticks / 60)) % 60);
    }

    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }

    private pad(digit: any) {
        return digit <= 9 ? '0' + digit : digit;
    }

    selectTest(test: Test) {
        this.currentQuestion = 0;
        this.selectedTest = test;
    }
    previousQuestion() {
        if (this.currentQuestion != 0)
        { this.currentQuestion--; }

    }
    nextQuestion() {

        if (this.currentQuestion != this.selectedTest.questions.length - 1)
        { this.currentQuestion++; }
    }
    finishTest() {

    }
}
