import React, {Component} from 'react';
import ForumAnswer from './ForumAnswer';

export default class ForumAnswers extends Component {

    render(){
        let allAnswers = this.props.allAnswers;
        let answers = [];

        for(var key in allAnswers){
            answers.push(<ForumAnswer key={key} id={key} answer={allAnswers[key]} />);
        }

        return(
            <div>
                { answers }
            </div>
        );
    }
}