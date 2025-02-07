export default function DropdownItem({
  index,
  item,
}: {
  index: number;
  item: string;
}) {
  return (
    <li key={index}>
      <a className="text-[#13294b]">{item}</a>
    </li>
  );
}
