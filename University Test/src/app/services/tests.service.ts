import { Injectable } from "@angular/core"
import { Http } from "@angular/http"

import 'rxjs/add/operator/toPromise';

import { Test, Question, Answer } from "../models/main-models"

@Injectable()
export class TestsService {
    private testUrl = "api/tests";
    private answers1 = [
	{answerID : 1, answerText : 'ans 1', isCorrect : true},
	{answerID : 2, answerText : 'ans 2', isCorrect : true},
	{answerID : 3, answerText : 'ans 3', isCorrect : true},
	{answerID : 4, answerText : 'ans 4', isCorrect : true}
    ]

	private answers2 = [
	{answerID : 1, answerText : 'ans 1', isCorrect : true},
	{answerID : 2, answerText : 'ans 2', isCorrect : false},
	{answerID : 3, answerText : 'ans 3', isCorrect : false},
	{answerID : 4, answerText : 'ans 4', isCorrect : false}
    ]
     private questions = [
	{ questionID : 1, questionText : 'What are we doing?', points : 2, answers : this.answers1},
	{ questionID : 2, questionText : 'What is Exigo?', points : 2, answers : this.answers2},
	{ questionID : 3, questionText : 'Where is the sun?', points : 1, answers : this.answers2}
    ]
     private tests = [
      { testID: 1,  testName: 'Yulia', estimatedTime: 20, questions: this.questions},
      { testID: 2,  testName: 'Yaroslav',  estimatedTime: 20},
      { testID: 3,  testName: 'Dasha', estimatedTime: 20},
      { testID: 4,  testName: 'Nick',  estimatedTime: 20}
    ];
	private test = { testID: 0,  testName: 'Yulia', estimatedTime: 20, questions: this.questions};
    

    public getAllTests(): Promise<Test[]> {
		 this.answers1 = [
	{answerID : 1, answerText : 'ans 1', isCorrect : true},
	{answerID : 2, answerText : 'ans 2', isCorrect : true},
	{answerID : 3, answerText : 'ans 3', isCorrect : true},
	{answerID : 4, answerText : 'ans 4', isCorrect : true}
    ]

	 this.answers2 = [
	{answerID : 1, answerText : 'ans 1', isCorrect : true},
	{answerID : 2, answerText : 'ans 2', isCorrect : false},
	{answerID : 3, answerText : 'ans 3', isCorrect : false},
	{answerID : 4, answerText : 'ans 4', isCorrect : false}
    ]
     this.questions = [
	{ questionID : 1, questionText : 'What are we doing?', points : 2, answers : this.answers1},
	{ questionID : 2, questionText : 'What is Exigo?', points : 2, answers : this.answers2},
	{ questionID : 3, questionText : 'Where is the sun?', points : 1, answers : this.answers2}
    ]
     this.tests = [
      { testID: 1,  testName: 'Yulia', estimatedTime: 20, questions: this.questions},
      { testID: 2,  testName: 'Yaroslav',  estimatedTime: 20},
      { testID: 3,  testName: 'Dasha', estimatedTime: 20},
      { testID: 4,  testName: 'Nick',  estimatedTime: 20}
    ];
	 this.test = { testID: 0,  testName: 'Yulia', estimatedTime: 20, questions: this.questions};
    	return Promise.resolve(this.tests);
    }

    public getTest(id: number): Promise<Test> {
		 this.answers1 = [
	{answerID : 1, answerText : 'ans 1', isCorrect : true},
	{answerID : 2, answerText : 'ans 2', isCorrect : true},
	{answerID : 3, answerText : 'ans 3', isCorrect : true},
	{answerID : 4, answerText : 'ans 4', isCorrect : true}
    ]

	 this.answers2 = [
	{answerID : 1, answerText : 'ans 1', isCorrect : true},
	{answerID : 2, answerText : 'ans 2', isCorrect : false},
	{answerID : 3, answerText : 'ans 3', isCorrect : false},
	{answerID : 4, answerText : 'ans 4', isCorrect : false}
    ]
     this.questions = [
	{ questionID : 1, questionText : 'What are we doing?', points : 2, answers : this.answers1},
	{ questionID : 2, questionText : 'What is Exigo?', points : 2, answers : this.answers2},
	{ questionID : 3, questionText : 'Where is the sun?', points : 1, answers : this.answers2}
    ]

	 this.test = { testID: 0,  testName: 'Yulia', estimatedTime:  +20, questions: this.questions};
        return Promise.resolve(this.test);           
    }
}