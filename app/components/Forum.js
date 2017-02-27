import React, {Component} from 'react';
import ImageCover from './ImageCover';
import ForumHeader from './ForumHeader';
import ForumQuestion from './ForumQuestion';
import ForumAnswers from './ForumAnswers';
import ForumAddAnswerBox from './ForumAddAnswerBox';
import ForumDispatcher from '../ForumDispatcher';
import NotifyMe from '../WebNotification';

export default class Forum extends Component {

    constructor() {
        super();
        this.state = { allAnswers:{} }
        this.handlerClick = this.handlerClick.bind(this);

        new NotifyMe().init();
    }


    handlerClick(event) {
        event.preventDefault();
        new NotifyMe().customNotification();
    }

    componentDidMount() {
            let resp = {
                "1": {
                    body:'React lib for create components and flux arquithecture!',
                    currect: false
                },
                "2": {
                    body:'React end framework components and flux is a lib!',
                    currect: false
                }
            };
            this.setState({ allAnswers: resp });
    }

    _onAddAnswer(answerText) {
        ForumDispatcher.dispatch({
            actionType:'FORUM_ANSWER_ADD',
            newAnswer: answerText
        });
    }

    render() {
        return(
            <div>
                <ForumHeader />
                <hr />
                <div className="container">
                    <ForumQuestion />
                    <hr />
                    <ForumAnswers allAnswers={this.state.allAnswers} />
                    <hr />
                    <h4>Add an answer</h4>
                    <ForumAddAnswerBox onAddAnswer={this._onAddAnswer} />
                    {/*<button onClick={this.handlerClick}>Notifique me!</button>*/}
                    <br/>
                </div>
            </div>
        );
    }
}