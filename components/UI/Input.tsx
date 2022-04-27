import cntl from "cntl";
interface InputProps {
  className?: string;
  containerClassName?: string;
  [key: string]: any;
}

export default function Input({ className, containerClassName, ...props }: InputProps) {
  const container = cntl`${containerClassName} group p-4`;
  const input = cntl`w-full p-2 focus:outline-none peer text-ellipsis ${className ?? ""}`;
  const border = cntl`border-b-[1px] peer-focus:border-b-2 border-b-slate-400`;

  return (
    <div className={container}>
      <input className={input} {...props} />
      <div className={border} />
    </div>
  );
}
