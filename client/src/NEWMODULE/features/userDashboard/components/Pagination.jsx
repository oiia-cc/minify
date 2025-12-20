export function Pagination({
  total,
  limit,
  hasPrev,
  hasNext,
  current,
  onNext,
  onPrev,
}) {
  return (
    <footer>
      <button>First</button>
      <button disabled={!hasPrev} onClick={onPrev}>
        {' '}
        Prev{' '}
      </button>
      <button>{current}</button>
      <button disabled={!hasNext} onClick={onNext}>
        Next
      </button>
      <button>Last</button>
      total: {total} , limit: {limit}, totalPages: {Math.ceil(total / limit)}
    </footer>
  );
}
