import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Routes, ParamMap,  ActivatedRoute } from '@angular/router';
import { Test, Question, Answer} from '../models/main-models';
import { HttpModule }           from '@angular/http';
import { TestsService } from '../services/tests.service';
import { Observable, Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Popup } from 'ng2-opd-popup';
import 'rxjs/add/operator/switchMap';
@Component({
    selector: 'app-test-card',
    templateUrl: './test-card.component.html',
    styleUrls: ['./test-card.component.css'],
    providers: [HttpModule]
})
export class TestCardComponent implements OnInit {
    @ViewChild('summary') summaryPopup: Popup;
    ticks = 0;

    minutesDisplay: number = 0;
    hoursDisplay: number = 0;
    secondsDisplay: number = 0;

    sub: Subscription;
    timer: Observable<number>;

    private tests: Test[];
    private results: number[];
    private selectedTest: Test;
    private currentQuestion: number;
    private selectedAnswer: number;
    private selectedAnswers: number[] = [];


    constructor(private testService: TestsService,
        private route: ActivatedRoute,
        private router: Router) { }
    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) =>
                this.testService.getTest(+params.get('id')))
            .subscribe(test => {
                this.setVariable(test);
                this.startTimer(test.estimatedTime * 60);
                console.log(test);
            });
    }
    private setVariable(test: Test): void {
        this.selectedTest = test;
        this.currentQuestion = 0;
    }
    private startTimer(seconds: number) {
        !this.sub || this.sub.unsubscribe();
        this.timer = Observable.timer(1, 1000);
        this.sub = this.timer.subscribe(
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
        console.log(this.selectedAnswers);
    }
    nextQuestion() {

        if (this.currentQuestion != this.selectedTest.questions.length - 1)
        { this.currentQuestion++; }
        console.log(this.selectedAnswers);
    }
    finishTest() {
        console.log(this.selectedAnswers);
        this.summaryPopup.options = {
            header: "Your custom header",
            color: "#5cb85c", // red, blue.... 
            widthProsentage: 40, // The with of the popou measured by browser width 
            animationDuration: 1, // in seconds, 0 = no animation 
            showButtons: true, // You can hide this in case you want to use custom buttons 
            confirmBtnContent: "OK", // The text on your confirm button 
            cancleBtnContent: "Cancel", // the text on your cancel button 
            confirmBtnClass: "btn btn-default", // your class for styling the confirm button 
            cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
            animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
        };
        this.summaryPopup.show(this.summaryPopup.options);
        this.router.navigate(['']);
    }
    selectAnswer(answerID: number): void {
        this.selectedAnswers[this.currentQuestion] = answerID;
    }
}
