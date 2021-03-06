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
let eventemiter = new EventEmitter();

export default class ForumStore {

    emitChange() {
        eventemiter.emit('change');
    }

    addChangeListener(listener) {
        eventemiter.on('change', listener);
    }

    getAnswers() {
        return answerData;
    }

    addAnswerData(newAnswer) {
        answerData[Object.keys(newAnswer).length + 1] = {
            body: newAnswer,
            correct:false
        }

        this.emitChange();
    }

    markAsCorrect(id) {
        for (var key in answerData) {
            answerData[key].correct = false;
        }

        answerData[id].correct = true;
        this.emitChange();
    }

}

let forumStore = new ForumStore();

ForumDispatcher.register( action => {
    switch(action.actionType) {
        case 'FORUM_ANSWER_ADD':{
            forumStore.addAnswerData(action.newAnswer);
            break;
        }
        case 'FORUM_ANSWER_MARKED_CORRECT': {
            forumStore.markAsCorrect(action.id);
            break;
        }
    }
});