import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};
export default function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
}
const buttonVariants = cva(
  "py-2 px-4 rounded-xl text-xs font-semibold hover:opacity-80",
  {
    variants: {
      variant: {
        primary: "bg-black text-white",
        secondary: "bg-white text-black",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
