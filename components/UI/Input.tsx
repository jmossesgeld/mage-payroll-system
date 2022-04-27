import cntl from "cntl";
import { InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  containerClassName?: string;
  error?: boolean;
}

export default function Input(props: InputProps) {
  const { className, containerClassName, value, error, onChange, onBlur, placeholder } = props;

  const inputClassName = cntl`
    block 
    py-2.5 
    px-0 
    w-full 
    text-sm 
    text-slate-900 
    bg-transparent 
    border-0 
    border-b-2 
    appearance-none 
    focus:outline-none 
    focus:ring-0 
    peer      
    ${error ? "focus:border-red-600 border-red-300" : "focus:border-sky-600 border-slate-300"} 
    ${className ?? ""}
  `;

  const labelClassName = cntl`
    peer-focus:font-medium 
    absolute text-sm 
    duration-300 
    transform 
    -translate-y-6 
    scale-75 top-3 
    -z-10 
    origin-[0] 
    peer-focus:left-0 
    peer-placeholder-shown:scale-100 
    peer-placeholder-shown:translate-y-0 
    peer-focus:scale-75 
    peer-focus:-translate-y-6    
    ${error ? "peer-focus:text-red-600 text-red-500" : "peer-focus:text-sky-600 text-slate-400 "} 
  `;

  const inputAttributes: InputHTMLAttributes<HTMLInputElement> = {
    className: inputClassName,
    value,
    onChange,
    onBlur,
  };

  return (
    <div className={containerClassName + " relative  flex-grow z-0 m-4 group"}>
      <input placeholder=" " {...inputAttributes} />
      <label className={labelClassName}>{placeholder}</label>
    </div>
  );
}
