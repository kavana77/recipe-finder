import type { ICardProps } from "@/types/data";
const Card = ({ children, actions }: ICardProps) => {
  return (
    <section className="relative bg-white rounded-3xl shadow p-4">
      {children}
      {actions}
    </section>
  );
};
export default Card;
