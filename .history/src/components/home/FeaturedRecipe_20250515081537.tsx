import Image from "../../assets/home/header.png"
import Button from "../ui/Button";
import List from "../../assets/home/list.svg"
import Text from "../ui/Text";
import Clock from "../../assets/home/clock.svg"
const FeaturedRecipe=()=>{
    return(
        <div className="flex w-full h-[640px] px-14 py-10">
           
                       {/*  Left Section */}
        <div className="bg-amber-400 w-[50%] h-full rounded-tl-4xl rounded-bl-4xl">
            <Button variant="secondary" className="flex items-center gap-2 mt-3 ml-6 shadow-xl">
                <img src={List} />
                Hot Recipes
            </Button>
            <Text variant="heading" className="text-6xl text-center mr-22 p-6 ">Spicy delicious chicken wings</Text>
            <Text variant="muted" className="pr-26 pl-16">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </Text>
            <div className="flex gap-6 ">
                <Button className="bg-gray-200 text-black flex gap-2">
                    <img src={Clock}/>
                    30 Minutes
                </Button>
                <Button className="bg-gray-200 text-black flex gap-2">
                    <img src={Clock}/>
                    30 Minutes
                </Button>
            </div>
        </div>
        {/* Right Section */}
            <img src={Image} className="w-[50%] h-full rounded-tr-4xl rounded-br-4xl"/>
       
        </div>
           
     
        
    )
}
export default FeaturedRecipe;