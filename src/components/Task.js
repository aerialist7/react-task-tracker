import {FaTimes} from "react-icons/fa"

const Task = ({task, onDelete}) =>
    <div className="task">
        <h3>
            {task.text}
            <FaTimes
                style={{color: "darkred"}}
                onClick={() => onDelete(task.id)}
            />
        </h3>
        <p>{task.day}</p>
    </div>

export default Task
