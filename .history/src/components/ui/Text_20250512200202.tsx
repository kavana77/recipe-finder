import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

type TextProps = React.HTMLAttributes<HTMLParagraphElement> &{
    variant?: "heading" | "muted" | "caption";
}
export default function Text ({className, variant ,...props}:TextProps){
    return(
        <p {...props} className={cn(textVariants({variant}),className)}/>
    )
}
const textVariants = cva("text-sm",{
    variants:{
        variant:{
            heading:"text-2xl font-bold",
            muted:"text-gray-00 text-[10px]",
            caption:"text-xs font-bold"
        }
    },
      defaultVariants: {
    variant: "caption",
  },
})