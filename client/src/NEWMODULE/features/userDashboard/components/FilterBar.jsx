export function FilterBar({ value, onChange }) {
  return (
    <dvi>
      <label htmlFor="">---groupBy-by:</label>
      <select
        onChange={(e) =>
          onChange({ ...value, [e.target.name]: e.target.value })
        }
        value={value.groupBy}
        name="groupBy"
        id="groupBy"
        defaultValue="none"
      >
        <option value="none">none</option>
        <option value="type">type</option>
      </select>
      <label htmlFor="">---sort-by:</label>
      <select
        value={value.sortBy}
        name="sortBy"
        id="sortBy"
        defaultValue="updatedAt"
        onChange={(e) =>
          onChange({ ...value, [e.target.name]: e.target.value })
        }
      >
        <option value="updatedAt">update-date</option>
        <option value="displayName">name</option>
        <option value="sizeBytes">size</option>
      </select>
      <label htmlFor="">---order: </label>
      <select
        value={value.orderBy}
        name="orderBy"
        id="orderBy"
        defaultValue="desc"
        onChange={(e) =>
          onChange({ ...value, [e.target.name]: e.target.value })
        }
      >
        <option value="desc">desc</option>
        <option value="asc">asc</option>
      </select>
    </dvi>
  );
}
