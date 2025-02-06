export default function Dropdown({
  name,
  items,
}: {
  name: string;
  items: string[];
}) {
  return (
    <li>
      <a>{name}</a>
      <ul className="hidden">
        {items.map((item) => (
          <li>
            <a>{item}</a>
          </li>
        ))}
      </ul>
    </li>
  );
}
