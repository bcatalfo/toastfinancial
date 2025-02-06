export default function Dropdown({ items }: { items: string[] }) {
  return (
    <ul className="hidden">
      {items.map((item) => (
        <li>
          <a>{item}</a>
        </li>
      ))}
    </ul>
  );
}
