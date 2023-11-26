import { useState } from 'react';

export function EditTodoForm({ editTodo, setIsEditing, title, id }) {
  const [updatedTitle, setUpdatedTitle] = useState(title ? title : '');

  function handleSubmit(event) {
    event.preventDefault();
    editTodo(id, updatedTitle);
    setIsEditing(false);
  }

  return (
    <form onSubmit={handleSubmit} className='new-item-form edit-item-form'>
      <label htmlFor='item'>Update - {title}</label>
      <div className='form-row'>
        <input
          value={updatedTitle}
          onChange={(event) => setUpdatedTitle(event.target.value)}
          type='text'
          id='item'
          name='item'
        />
        <button className='btn'>Save</button>
      </div>
    </form>
  );
}
