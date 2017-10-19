import { Component, OnInit } from '@angular/core';
import {Test, Question, Answer} from '../models/main-models';
import { HttpModule }           from '@angular/http';
import { TestsService } from '../services/tests.service';
@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.css'],
	providers:[HttpModule]
})
export class TestCardComponent implements OnInit{
private tests:Test[];
private results:number[];
private selectedTest:Test;
private currentQuestion:number;

constructor(private testService: TestsService){}
//this.items = this.testService.getData();
ngOnInit()
{
	this.testService.getAllTests().then(data=>this.tests=data);
}
selectTest(test:Test)
{
	this.currentQuestion=0;
	this.selectedTest=test;
}
previousQuestion() 
{
	if(this.currentQuestion!=0)
	{this.currentQuestion--;}
	
}
nextQuestion(){
	
	if(this.currentQuestion!=this.selectedTest.questions.length-1)
	{this.currentQuestion++;}
}
	finishTest()
	{
		
	}
}
