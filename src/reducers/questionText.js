const questionTextReducer = (state = "", action) => {
    switch(action.type){
        case 'CHANGE_QUESTION':
            return action.payload;

        case 'RESET_QUESTION':
            return '';
            
        default:
            return state;
    }
}

export default questionTextReducer;