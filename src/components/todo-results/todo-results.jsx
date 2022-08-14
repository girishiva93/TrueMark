import { useContext, useEffect, useState } from "react";
import { Checkbox } from "../checkbox";
import "./todo-results.css";
import { TodosContext } from "../../todo-context";

export const TodoResults = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const [completed, setCompleted] = useState([]);

  // const calculateChecked = () => {
  //   // Fix an ability to calculate completed tasks

  // };

  const filterTodo = () => {
    setCompleted(todos.filter((todo) => todo.checked));
  };

  useEffect(() => {
    filterTodo();
  }, [todos]);

  const handleDelete = (id) => {
    // Fix an ability to delete task
    setTodos((prevState) => [...prevState.filter((todo) => todo.id !== id)]);
  };

  const toggleCheck = (item) => {
    // Fix an ability to toggle task
    setTodos((prevState) => [
      { ...item, checked: !item.checked },
      ...prevState.filter((todo) => todo.id !== item.id),
    ]);
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-results">
      Done:{completed.length}
      {completed.map((filteredTodo) => (
        <Checkbox
          key={filteredTodo.id}
          label={filteredTodo.label}
          checked={filteredTodo.checked}
          onClick={() => toggleCheck(filteredTodo)}
          onKeyUp={(e) => handleKeyUp(e, filteredTodo.id)}
          onDelete={() => handleDelete(filteredTodo.id)}
        />
      ))}
    </div>
  );
};
