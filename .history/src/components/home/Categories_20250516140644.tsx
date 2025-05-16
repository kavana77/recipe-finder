import Text from "../ui/Text";
import Button from "../ui/Button";
import { categoryItems } from "@/utils/constant";

const Categories = () => {
  return (
    <div className="w-full px-6 md:px-14 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <Text variant="heading">Categories</Text>
        <Button className="bg-[#E7FAFE] text-black w-full md:w-auto">
          View All Categories
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categoryItems.map((item) => (
          <div
            key={item.id}
            className={`w-full h-[180px] sm:h-[200px] md:w-[2] rounded-4xl bg-gradient-to-b ${item.gradient} flex flex-col items-center justify-center`}
          >
            <div
              className={`w-[52px] h-[52px] rounded-full bg-transparent flex items-center justify-center ${item.shadow}`}
            >
              <img src={item.image} className="w-10 h-10" />
            </div>
            <span className="mt-4 font-bold text-center text-sm sm:text-base">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
