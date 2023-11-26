import { useState } from 'react';
import { EditTodoForm } from './EditTodoForm';

export function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          setIsEditing={setIsEditing}
          title={title}
          id={id}
        />
      ) : (
        <li>
          <label htmlFor={title}>
            <input
              id={title}
              type='checkbox'
              checked={completed}
              onChange={(event) => toggleTodo(id, event.target.checked)}
            />
            <span>{title}</span>
          </label>
          <div className='todo-btn-container'>
            <button className='btn' onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className='btn btn-danger' onClick={() => deleteTodo(id)}>
              Delete
            </button>
          </div>
        </li>
      )}
    </>
  );
}
