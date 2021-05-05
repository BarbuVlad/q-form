const answersListReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD':
            let ans_arr = [...state, action.payload];
            return ans_arr;
        case 'REMOVE':
           let ans_arr_pop = [...state];
            ans_arr_pop.pop();
            return ans_arr_pop;

        case 'SET_TEXT':
            let ans_arr_text = [...state];
            const txt = ans_arr_text[action.id]['text'];
            ans_arr_text[action.id] = {txt, text:action.payload};
            return ans_arr_text;

        case 'SET_CORECT':
            let ans_arr_corect = [...state];
            ans_arr_corect[action.id] = { ...ans_arr_corect[action.id] , corect:action.payload};
            return ans_arr_corect;

        case 'RESET_ANSWERS':
            return [];

        default:
            return state;
    }
}

export default answersListReducer;