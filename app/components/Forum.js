import React, {Component} from 'react';
import ImageCover from './ImageCover';
import ForumHeader from './ForumHeader';
import ForumQuestion from './ForumQuestion';
import ForumAnswers from './ForumAnswers';
import ForumAddAnswerBox from './ForumAddAnswerBox';
import ForumStore from '../stores/ForumStore';
import ForumActions from '../actions/ForumActions';
import NotifyMe from '../WebNotification';

let forumStore = new ForumStore;
let forumActions = new ForumActions;

let answerData = {
                "1": {
                    body:'React lib for create components and flux arquithecture!',
                    correct: false
                },
                "2": {
                    body:'React end framework components and flux is a lib!',
                    correct: false
                }
            };

export default class Forum extends Component {

    constructor() {
        super();
        this.state = { allAnswers: forumStore.getAnswers() }
        this.handlerClick = this.handlerClick.bind(this);
        this._onChange = this._onChange.bind(this);

        new NotifyMe().init();
    }

    componentDidMount() {
        forumStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        forumStore.removeListener(this._onChange);
    }

    handlerClick(event) {
        event.preventDefault();
        new NotifyMe().customNotification();
    }

    _onAddAnswer(answerText) {
        forumActions.addAnswer(answerText);
    }

    _onChange() {
        this.setState({ allAnswers: forumStore.getAnswers() });
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