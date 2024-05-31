import EditableTodo from "./EditableTodo.jsx";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {
  console.log("EditableTodoList", todos);
  return (
    <div className="EditableTodoList">
      {todos.map(todo => {
        return (
          <EditableTodo
            key={todo.id}
            todo={todo}
            update={update}
            remove={remove}
          />
        );
      })}
    </div>
  );
}

export default EditableTodoList;
