import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
    return (
        <main className="bg-gray-700">
            <div className="mx-auto container bg-gray-700 p-4 h-screen">
                <TaskForm />
                <TaskList />
            </div>
        </main>
    );
}

export default App;
