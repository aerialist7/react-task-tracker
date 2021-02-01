import {FaTimes} from "react-icons/fa"

const Task = ({task}) =>
    <div className="task">
        <h3>
            {task.text}
            <FaTimes style={{color: "darkred"}}/>
        </h3>
        <p>{task.day}</p>
    </div>

export default Task
