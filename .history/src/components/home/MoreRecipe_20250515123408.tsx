
import Text from "../ui/Text";
import Group1 from "../../assets/recommendationrecipe/rgoup1.png"
import Group2 from "../../assets/recommendationrecipe/rgroup2.png"
import Group3 from "../../assets/recommendationrecipe/rgroup3.png"
import Group4 from "../../assets/recommendationrecipe/rgroup4.png"
import Clock from "../../assets/recommendationrecipe/clock.svg"
import ForkKnife from "../../assets/recommendationrecipe/ForkKnife.svg"
type IRecipe={
    id:number;
    title:string;
    image:string;
    time:string;
    category:string;
};
const recipes: IRecipe[] =[
    {
        id:1,
        title: "Mixed Tropical Fruit Salad with Superfood Boosts",
        image: Group1,
        time: "30 Minutes",
        category: "Healthy",
    },
    {
        id:2,
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        image: Group2,
        time: "30 Minutes",
        category: "Western",
    },
    {
        id:3,
        title: "Healthy Japanese Fried Rice with Asparagus",
        image: Group3 ,
        time: "30 Minutes",
        category: "Japanese",
    },
    {
        id:4,
        title: "Cauliflower Walnut Vegetarian Taco Meat",
        image: Group4,
        time: "30 Minutes",
        category: "Eastern",
    },
    {
        id:1,
        title: "Mixed Tropical Fruit Salad with Superfood Boosts",
        image: Group1,
        time: "30 Minutes",
        category: "Healthy",
    },
    {
        id:2,
        title: "Big and Juicy Wagyu Beef Cheeseburger",
        image: Group2,
        time: "30 Minutes",
        category: "Western",
    },
    {
        id:3,
        title: "Firecracker Vegan",
        image: Group3 ,
        time: "30 Minutes",
        category: "Seafood",
    },
    {
        id:8,
        title: "Chicken Ramen Soup with Mushroom",
        image: Group4,
        time: "30 Minutes",
        category: "Japanese",
    },
]
const MoreRecipe = () => {
    return (
      <div className="w-full px-14 my-16">
        <div className="flex gap-16 mb-12">
          <Text variant="heading">Try this delicious recipe to make your day</Text>
          <Text variant="muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>
  
        <div className="grid grid-cols-4 gap-6">
          {recipes.map((recipe, index) => (
            <div key={`${recipe.id}-${index}`} className="rounded-3xl shadow hover:shadow-lg transition-all">
              <img src={recipe.image} alt={recipe.title} className="rounded-t-3xl w-full h-[180px] object-cover" />
              <div className="p-4">
                <h2 className="font-semibold text-base mb-2">{recipe.title}</h2>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <div className="flex items-center gap-1">
                    <img src={Clock} alt="Time" className="w-4 h-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={ForkKnife} alt="Category" className="w-4 h-4" />
                    <span>{recipe.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default MoreRecipe