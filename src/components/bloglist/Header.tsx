import Button from "../ui/Button";
import Text from "../ui/Text";

const Header=()=> {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 mb-8 px-4 text-center">
      <Text variant="heading">Blog & Article</Text>
      <Text variant="muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </Text>

      <div className="relative w-full max-w-[450px] mt-4">
        <input
          type="email"
          placeholder="Search article, news or recipe.."
          className="w-full h-[50px] p-3 pr-28 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <Button className="absolute top-1/2 right-2 transform -translate-y-1/2 px-6 py-2">
          Search
        </Button>
      </div>
    </div>
  );
}
export default Header