/*A test is composed of the other states: anserList and Question
It is an array like: 
[
{question:"...", type:"...", answerList:"..."}, 
{question2:"...", type:"...", answerList2:"..."},
........
]

Type can be: text, radiobuttons(default), checkboxes
*/

const testQuestionsReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_QUESTION':
            let test = [...state, action.payload];
            return test;

        case 'REMOVE_QUESTION':
           let test_pop = [...state];
            test_pop.splice(action.payload, 1);
            return test_pop;
        
        case 'EDIT_QUESTION':
            let test_edit = [...state];
            test_edit.pop();
            return test_edit;

        default:
            return state;
    }
}

export default testQuestionsReducer;