export function List({ data, meta, loading }) {
  if (loading) return <p>Loading...</p>;
  if (!data?.length) return <p>No results</p>;
  console.log('->>>file in List.jsx e.g: ', data[0]);

  return (
    <ul>
      {data.map((item, no) => (
        <li key={item.id}>
          {Number(meta.page - 1) * Number(meta.limit) + no + 1}
          {' :'}
          {item?.displayName} | {item.versions[0]?.mimeType} | {item?.updatedAt}
        </li>
      ))}
    </ul>
  );
}
