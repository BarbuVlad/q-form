import React from 'react'

const TestAnswers = () => {

    const handleReadAnswers= async () => {
        const solved = await fetch(`http://192.168.206.129/q_form_server/public/user/getCreatedTests/${_userId}`, {
            method: 'GET',
            headers: {"Content-type": "application/json"}
        });
        const data = await solved.json();

    }
    return (
        <div>
                
        </div>
    )
}

export default TestAnswers;
