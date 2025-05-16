import Image from "../../assets/home/header.png"
import Button from "../ui/Button";
import List from "../../assets/home/list.svg"
import Text from "../ui/Text";
const FeaturedRecipe=()=>{
    return(
        <div className="flex w-full h-[640px] px-14 py-10">
           
                       {/*  Left Section */}
        <div className="bg-amber-400 w-[50%] h-full rounded-tl-4xl rounded-bl-4xl">
            <Button variant="secondary" className="flex items-center gap-2 mt-3 ml-6 shadow-xl">
                <img src={List} />
                Hot Recipes
            </Button>
            <Text variant="heading" className="text-4xl text-center ">Spicy delicious chicken wings</Text>
        </div>
        {/* Right Section */}
            <img src={Image} className="w-[50%] h-full rounded-tr-4xl rounded-br-4xl"/>
       
        </div>
           
     
        
    )
}
export default FeaturedRecipe;