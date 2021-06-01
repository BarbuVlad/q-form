/*------------------------- Answer actions -------------------------*/
export const add = (answer) => {
    return{
        type: 'ADD',
        payload: answer 
    }
}

export const remove = () => {
    return{
        type: 'REMOVE',
        //payload: 
    }
}
export const setText = (id,text) => {
    return{
        type: 'SET_TEXT',
        id,
        payload: text
    }
}

export const setCorect = (id,corect) => {
    return{
        type: 'SET_CORECT',
        id,
        payload: corect
    }
}

export const resetAnswers = () => {
    return{
        type: 'RESET_ANSWERS',
    }
}

/* -------------------------Qustion actions -------------------------*/
export const changeQuestion = (text) => {
    return{
        type: 'CHANGE_QUESTION',
        payload: text
    }
}

export const resetQuestion = () => {
    return{
        type: 'RESET_QUESTION',
    }
}
/* -------------------------Type of question------------------------- */
export const changeType = (type) => {
    return{
        type: 'CHANGE_TYPE',
        payload: type
    }
}


/* -------------------------Test(entity) actions------------------------- */
export const addQuestionToTest = (object) => {
    return{
        type: 'ADD_QUESTION',
        payload: object
    }
}
export const removeQuestionFromTest = (element) => {
    return{
        type: 'REMOVE_QUESTION',
        payload: element
    }
}

export const editQuestionFromTest = (element) => {
    return{
        type: 'EDIT_QUESTION',
        payload: element
    }
}

/* -------------------------User id actions------------------------- */
export const setUserId = (id) => {
    return{
        type: 'SET_USER_ID',
        payload: id
    }
}