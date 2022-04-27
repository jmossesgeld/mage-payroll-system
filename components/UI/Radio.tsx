interface RadioProps {
  label: string;
  name: string;
  [key: string]: any;
}

export default function Radio({ label, name, ...props }: RadioProps) {
  return (
    <label>
      <input type="radio" name={name} className="mr-4 transition-all hover:scale-125" />
      {label}
    </label>
  );
}
