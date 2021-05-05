import answersListReducer from './answersList';
import questionTextReducer from './questionText';
import testQuestionsReducer from './testQuestions';
import answersTypeReducer from './answersType';

import {combineReducers} from 'redux';

const qFormReducers = combineReducers({
    answersList: answersListReducer,
    questionText: questionTextReducer,
    answersType: answersTypeReducer,
    testQuestions: testQuestionsReducer,

});

export default qFormReducers;