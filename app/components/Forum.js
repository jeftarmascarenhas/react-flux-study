import React, {Component} from 'react';
import ImageCover from './ImageCover';
import ForumHeader from './ForumHeader';
import ForumQuestion from './ForumQuestion';
import ForumAnswers from './ForumAnswers';
import ForumAddAnswerBox from './ForumAddAnswerBox';
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
                questionOne: {
                    body:'React lib for create components and flux arquithecture!',
                    currect: false
                },
                questionTwo: {
                    body:'React end framework components and flux is a lib!',
                    currect: false
                }
            };
            this.setState({ allAnswers: resp });
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
                    <ForumAddAnswerBox />
                    {/*<button onClick={this.handlerClick}>Notifique me!</button>*/}
                    <br/>
                </div>
            </div>
        );
    }
}