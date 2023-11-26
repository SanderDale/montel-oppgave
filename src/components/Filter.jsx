export function Filter({ filter, setFilter }) {
  return (
    <div className='filter-btn-container'>
      <button
        className={`btn btn-filter ${filter === 'all' ? 'btn-active' : ''}`}
        onClick={() => setFilter('all')}>
        All
      </button>
      <button
        className={`btn btn-filter ${filter === 'active' ? 'btn-active' : ''}`}
        onClick={() => setFilter('active')}>
        Active
      </button>
      <button
        className={`btn btn-filter ${
          filter === 'completed' ? 'btn-active' : ''
        }`}
        onClick={() => setFilter('completed')}>
        Completed
      </button>
    </div>
  );
}
