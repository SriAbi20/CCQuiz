import React, { Component } from 'react';
import './assets/style.css';
import QuestionBox from './components/QuestionBox';
import questions from './quizService/index';
import Result from './components/Result';



class App extends Component{
  state={
    ques:[],
    score:0,
    responses:0
  };
  getQuestions = () =>{
    questions().then(question=>{
      this.setState({
        ques:question
      });
    });
  };
  playAgain =()=>{
    this.getQuestions();
    this.setState({
      ques:[],
      responses:0,
      score:0
    })
  }
  finalAns = (answer,correctAns)=>{
    if(answer==correctAns)
    {
      this.setState({
        score:this.state.score+1
      });
    }
    this.setState({
      responses:this.state.responses < 5 ? this.state.responses + 1 : 5
    })
  }
  componentDidMount(){
    this.getQuestions();
  }
  render(){
    return(
      <div className ="container">
       <div className="title">
         Cloud Computing Quiz
       </div>
       {this.state.ques.length > 0 && this.state.responses < 5 &&
       this.state.ques.map(({question,answers,correct,questionId})=>

         <QuestionBox question={question} options={answers} key={questionId}
         selected ={answer=>{this.finalAns(answer,correct)}}
        />
       )}
       {this.state.responses===5 ?(<Result score={this.state.score} playAgain={this.playAgain}/>):null}
      </div>
    )
  }
}
export default App;
