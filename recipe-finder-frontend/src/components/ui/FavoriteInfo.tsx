import type { IFavoriteProps } from "@/types/data";
const FavoriteInfo = ({ mode, children }: IFavoriteProps) => {
  if (mode === "hint") {
    return (
      <aside className="text-center text-gray-600 h-screen">
        <h2 className="text-lg font-semibold">No Favorite Recipe Yet</h2>
        <p>{children}</p>
      </aside>
    );
  }
  return (
    <aside className="text-center text-orange-600">
      <h2 className="text-lg font-semibold">Warning</h2>
      <p>{children}</p>
    </aside>
  );
};
export default FavoriteInfo;
