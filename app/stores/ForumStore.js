import EventEmitter from '../EventEmitter';
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
        for (key in answerData) {
            answerData[key].correct = false;
        }

        answerData[id].correct = true;
    }
}