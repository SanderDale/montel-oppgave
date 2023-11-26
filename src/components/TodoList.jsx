import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <ul className='list'>
      {todos.length === 0 && 'No todos yet!'}
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </ul>
  );
}
