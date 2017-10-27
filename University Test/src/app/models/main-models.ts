export class Test {
    public testID: number;
    public testName: string;
    public createdDate: Date;
    public questions: Question[];
    public estimatedTime: number;
}

export class Question {
    public questionID: number;
    public questionText: string;
    public points: number;
    public test: Test;
    public answers: Answer[];
}

export class Answer {
    public answerID: number;
    public answerText: string;
    public question: Question;
    public isCorrect: boolean;
}