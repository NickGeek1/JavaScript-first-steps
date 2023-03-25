import React from "react";
import './index.css';

export const Task = (props) => {
    const handleButtonOpen = () => {
        props.onHandleOpen(false)
        props.setDescription(props.item.description)
        getId()
        clean()
    }

    const getId = () => {
        props.setId(props.item.id)
    }

    const clean = () => {
        props.setInputValue('')
        props.setTaskResult('')
    }


    return (
        <div>
            <label htmlFor="task" className="form__label">
                <input type="radio" onClick={handleButtonOpen} name="task" className="form__check"/>
                <span className="form__task-text">{props.item.shortName}</span>
            </label>
        </div>
    )
};