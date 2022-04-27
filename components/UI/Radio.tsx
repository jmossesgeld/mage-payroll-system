interface RadioProps {
  label: string;
  name?: string;
  checked?: boolean;
  [key: string]: any;
}

export default function Radio({ label, name, value, onChange, passedValue }: RadioProps) {
  return (
    <label>
      <input
        type="radio"
        name={name}
        className="mr-4 transition-all hover:scale-125"
        value={value}
        onChange={onChange}
        checked={passedValue === value}
      />
      {label}
    </label>
  );
}
