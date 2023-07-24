import TaskList from "./Components/taskList";
import TaskForm from "./Components/taskForm";
import Footer from "./Components/Footer"

function App() {
  return (
    <main className="bg-zinc-900 flex flex-col min-h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
        </div>
        <Footer/>
    </main>
  );
}

export default App;
