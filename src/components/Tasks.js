import PropTypes from "prop-types"

const Tasks = ({tasks}) =>
    <>{
        tasks.map(task =>
            <h3 key={task.id}>{task.text}</h3>
        )
    }</>

Tasks.propTypes = {
    title: PropTypes.array,
}

export default Tasks
