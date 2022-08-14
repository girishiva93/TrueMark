import { useContext } from "react";
import { Checkbox } from "../checkbox";
import { TodosContext } from "../../todo-context";
import "./todo-list.css";

export const TodoList = () => {
  const { todos, setTodos } = useContext(TodosContext);

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
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
