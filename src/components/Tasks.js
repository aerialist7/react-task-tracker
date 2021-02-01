import Task from "./Task"

const Tasks = ({tasks}) =>
    <>{
        tasks.map(task =>
            <Task key={task.id} task={task}/>
        )
    }</>

export default Tasks
