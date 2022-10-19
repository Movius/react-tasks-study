import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext);

    return (
        <div key={task.id} className="bg-gray-800 text-white p-4 rounded">
            <h1 className="text-xl font-bold capitalize">{task.title}</h1>
            <p className="text-gray-500 text-sm">{task.description}</p>
            <button
                className="bg-red-500 px-3 py-2 mt-3 rounded-md text-sm hover:bg-red-700"
                onClick={() => deleteTask(task.id)}
            >
                Elimiar Tarea
            </button>
        </div>
    );
}

export default TaskCard;
