function TaskList({ tasks, toggleComplete, deleteTask, editTask }) {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                className="mr-2"
              />
              <span
                className={`${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.text}
              </span>
            </div>
            <div>
              <button
                onClick={() =>
                  editTask(task.id, prompt("Edit task:", task.text))
                }
                className="text-blue-500 mr-2"
              >
                Edit
              </button>
              <button onClick={() => deleteTask(task.id)} className="text-red-500">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;
  