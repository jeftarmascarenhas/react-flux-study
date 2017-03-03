import EventEmitter from '../EventEmitter';
import Dispatcher from '../Dispatcher';
import ForumDispatcher from '../dispatcher/ForumDispatcher';

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

export default class ForumStore extends EventEmitter {

    static getAnswers() {
        return answerData;
    }

    static addAnswerData(newAnswer) {
        answerData[Object.keys(newAnswer).length + 1] = {
            body: newAnswer,
            correct:false
        }
    }

    static markAsCorrect(id) {
        for (var key in answerData) {
            answerData[key].correct = false;
        }

        answerData[id].correct = true;
    }

}

ForumDispatcher.register( action => {
    console.log('received an action');
    console.log(action);
    switch(action.actionType) {
        case 'FORUM_ANSWER_ADD':{
            console.log('Answer added!');
            ForumStore.addAnswerData(action.newAnswer);
            break;
        }
        case 'FORUM_ANSWER_MARKED_CORRECT': {
            console.log('MARKED_CORRECT', action.id);
            ForumStore.markAsCorrect(action.id);
            break;
        }
    }
});