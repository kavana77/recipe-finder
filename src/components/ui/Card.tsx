import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "bordered" | "shadow";
};

const cardVariants = cva(
  "rounded-3xl p-4 transition-all", 
  {
    variants: {
      variant: {
        default: "bg-white",
        bordered: "bg-white border border-gray-200",
        shadow: "bg-white shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export default function Card({
  className,
  variant,
  ...props
}: CardProps) {
  return (
    <div className={cn(cardVariants({ variant }), className)} {...props} />
  );
}
