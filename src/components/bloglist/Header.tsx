import Text from "../ui/Text";
import useSearchStore from "@/store/searchStore";

const Header = () => {
  const { searchQuery, setSearchQuery } = useSearchStore();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 mb-8 px-4 text-center">
      <Text variant="heading">Blog & Article</Text>
      <Text variant="muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </Text>

      <form
        onSubmit={handleSearch}
        className="relative w-full max-w-[450px] mt-4"
      >
        <input
          type="text"
          placeholder="Search article, news or recipe.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-[50px] p-3 pr-28 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 px-6 py-2 hover:scale-120 cursor-pointer bg-black text-white rounded-2xl"
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default Header;
