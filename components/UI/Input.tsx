import cntl from "cntl";

interface InputProps {
  className?: string;
  containerClassName?: string;
  [key: string]: any;
}

export default function Input({ className, containerClassName, block, ...props }: InputProps) {
  const container = cntl`
        ${containerClassName}
        group
        p-4`;

  const input = cntl`
    w-full
     p-2 
     focus:outline-none
      peer
       text-ellipsis
        ${className ?? ""}`;

  return (
    <div className={container}>
      <input {...props} className={input} />
      <div className="border-b-[1px] peer-focus:border-b-2 border-b-slate-400" />
    </div>
  );
}
