const answersTypeReducer = (state = "radiobuttons", action) => {
    switch(action.type){
        case 'CHANGE_TYPE':
            return action.payload;//can be: radiobuttons, checkboxes, text
            
        default:
            return state;
    }
}

export default answersTypeReducer;