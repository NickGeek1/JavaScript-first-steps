import './index.css';
import React from 'react';


export const Modal = (props) => {

    const setInputValue = props.setInputValue


    const checkValue = () => {
        let value = '';
        if (props.opened === true) {
            value = 'modal__opened'
        } else {
            value = 'modal'
        }
        return value;
    }
    
    
    return (
        <div className={checkValue()}>
            <p className="modal-text">{props.description}</p>
            <button className="modal-button" onClick={props.changeTaskResult}>Проверить</button>
            <input value={props.inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" className="enter-space" placeholder="Ввод"/>
            <p className="result">{props.taskResult}</p>
        </div>
    )
}