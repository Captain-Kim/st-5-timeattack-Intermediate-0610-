import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList({ isDone }) {

  const todos = useSelector( ( state ) => state.todos.items.filter(todo => todo.done === isDone) );
  const dispatch = useDispatch();

  return (
    <section>
      <h2>{isDone ? 'Done' : 'Working'}!!!</h2>
      <ul>
        {todos.map((todo) =>(
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}
