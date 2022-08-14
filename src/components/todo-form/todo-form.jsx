import { useContext, useState } from "react";
import { TodosContext } from "../../todo-context";
import "./todo-form.css";

export const TodoForm = () => {
  const { todos, setTodos, primaryKey, setPrimaryKey } =
    useContext(TodosContext);
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    // Fin an ability to add new task
    if (task === "") {
      console.log("error - can't add empty object");
    } else {
      setTodos((prevTodos) => [
        {
          id: primaryKey + 1,
          label: task,
          checked: false,
        },
        ...prevTodos,
      ]);
      setPrimaryKey(primaryKey + 1);
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
