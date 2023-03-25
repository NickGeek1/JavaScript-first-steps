import {Task} from './Task.js';

export const TaskList = (props) => {
    return (
        <div className="task-list">{props.tasks.map(task => <Task 
            onHandleOpen={props.onHandleOpen}
            key={task.id}
            item={task}
            setDescription={props.changeDescription}
            setId={props.setId}
            setInputValue={props.setInputValue}
            setTaskResult={props.setTaskResult}/>)}
        </div>
    )
}