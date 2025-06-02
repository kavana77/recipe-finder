import type { ComponentPropsWithoutRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;
const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-semibold mb-1">
        {label}
      </label>
      <input
        id={id}
        className="p-3 rounded-md border
             border-gray-300 focus:outline-none focus:ring-2
              focus:ring-black"
        {...props}
      />
    </div>
  );
};
export default Input;
