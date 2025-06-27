import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  // Load todos from localStorage on first render
  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      setTodos(JSON.parse(todoString));
    } else {
      setTodos([]);
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleAdd = () => {
    if (todo.trim().length < 3) return; // basic validation
    const newTodo = { id: uuidv4(), todo, isCompleted: false };
    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const handleEdit = (e, id) => {
    const t = todos.find((i) => i.id === id);
    setTodo(t.todo);
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const handleDelete = (e, id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const index = todos.findIndex((item) => item.id === id);
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <>
      <Navbar />
      <div className="md:container mx-auto bg-violet-100 p-5 rounded-xl min-h-[80vh] md:w-[36%]">
        <div className="add-Todo">
          <h1 className="font-bold text-2xl text-center mt-3">iTask - Manage your todos at one place</h1>
          <h2 className="font-bold mt-5 text-xl">Add a Todo</h2>
          <div>
            <input
              onChange={handleChange}
              onKeyDown={(e) => e.key === "Enter" && handleAdd()}
              value={todo}
              type="text"
              className="rounded-full w-3/4 md:w-4/5 my-2 px-2 py-1"
            />
            <button
              onClick={handleAdd}
              disabled={todo.trim().length < 3}
              className="bg-purple-800 hover:bg-purple-950 text-sm px-4 py-2 hover:cursor-pointer disabled:bg-gray-700 text-white rounded-full font-bold mx-2 md:mx-3"
            >
              Save
            </button>
          </div>
        </div>
        <input
          className="m-2 mt-4 hover:cursor-pointer"
          onChange={toggleFinished}
          type="checkbox"
          checked={showFinished}
        />
        Show Finished
        <div className="h-[2px] bg-gray-300 w-[90%] mx-auto my-2"></div>
        <div className="font-bold">
          <h2 className="my-2 text-xl">Your Todos</h2>
        </div>
        <div className="todos">
          {todos.length === 0 && <div className="m-2">No Todos to Display</div>}
          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div key={item.id} className="todo flex justify-between w-full my-2">
                  <div className="flex gap-5">
                    <input
                      className="hover:cursor-pointer"
                      onChange={handleCheckbox}
                      type="checkbox"
                      name={item.id}
                      checked={item.isCompleted}
                    />
                    <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                  </div>
                  <div className="buttons flex max-h-7">
                    <button
                      onClick={(e) => handleEdit(e, item.id)}
                      className="mx-2 bg-purple-800 hover:bg-purple-950 text-sm px-2 py-1 text-white rounded-lg font-bold"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={(e) => handleDelete(e, item.id)}
                      className="mx-2 bg-purple-800 hover:bg-purple-950 text-sm px-2 py-1 text-white rounded-lg font-bold"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
