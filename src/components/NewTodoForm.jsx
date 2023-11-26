import { useState } from 'react';

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (newItem === '') return;

    onSubmit(newItem);

    setNewItem('');
  }

  return (
    <form onSubmit={handleSubmit} className='new-item-form'>
      <label htmlFor='item' className='sub-header'>
        New todo
      </label>
      <div className='form-row'>
        <input
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          type='text'
          id='item'
          name='item'
        />
        <button className='btn'>Add</button>
      </div>
    </form>
  );
}
