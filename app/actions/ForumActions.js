import ForumDispatcher from '../dispatcher/ForumDispatcher';
import ForumConstants  from '../constants/ForumConstants';

let forumConstants = new ForumConstants();

export default class ForumActions {
  markAsCorrect(id) {
    ForumDispatcher.dispatch({
      actionType: ForumConstants.FORUM_ANSWER_MARKED_CORRECT(),
      id: id
    });
  }

  addAnswer(answerText) {
    ForumDispatcher.dispatch({
      actionType: ForumConstants.FORUM_ANSWER_ADD(),
      newAnswer: answerText
    })
  }
}