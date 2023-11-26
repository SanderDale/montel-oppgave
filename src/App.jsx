import { useState, useEffect } from 'react';
import { NewTodoForm } from './components/NewTodoForm';
import { Filter } from './components/Filter';
import { TodoList } from './components/TodoList';
import './styles.css';

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));

    if (filter === 'all') {
      setFilteredTodos(todos);
    } else if (filter === 'active') {
      setFilteredTodos(todos.filter((todo) => !todo.completed));
    } else if (filter === 'completed') {
      setFilteredTodos(todos.filter((todo) => todo.completed));
    }
  }, [todos, filter]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function editTodo(id, title) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title };
        }
        return todo;
      });
    });
  }

  return (
    <>
      <h1 className='header'>Montel todo app</h1>
      <NewTodoForm onSubmit={addTodo} />
      <h2 className='sub-header'>Todo List</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  );
}
