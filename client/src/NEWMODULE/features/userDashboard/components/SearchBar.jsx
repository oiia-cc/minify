export function SearchBar({ value, onChange }) {
  console.log('value:', value);

  return (
    <input
      value={value}
      placeholder="Search..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
