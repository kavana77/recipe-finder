import Button from "../ui/Button";
import Text from "../ui/Text";
import chef from "../../assets/learnmore/chef.png"
import tomatoe from "../../assets/learnmore/tomatoe.png"
import cabbage from "../../assets/learnmore/cabbage.png"
import meat from "../../assets/learnmore/meat.png"
import onion from "../../assets/learnmore/onion.png"
export default function LearnMore(){
    return(
       
             <div className="w-full h-[597px] flex items-center px-14 overflow-hidden">

        {/* left Section */}
        <div className="w-1/2 pr-50">
        
        <Text variant="heading" className="mb-8">Everyone can be a chef in their own kitchen</Text>
        <Text variant="muted"className="mb-8"> Lorem ipsum dolar sit amet, consectetuipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolare magna aliqut enim ad minim</Text>
        <Button>Learn More</Button>
        
        
        </div>
        {/* Right Section */}
        <div className="relative w-1/2 h-screen bg-gradient-to-b from-[#fafafa] to-[#E7F9FD]">
        <img src={chef} className="absolute w-[650px] h-[597px] right-20 bottom-0 "/>
        <img src={tomatoe} className="absolute w-[50px] h-[50px] bottom-35 right-150 "/>
        <img src={cabbage} className="absolute w-[80px] h-[80px] right-10 top-50"/>
        <img src={meat} className="absolute w-[80px] h-[80px] top-26 "/>
        <img src={onion} className="absolute w-[50px] h-[50px] right-50 top-25" />
        </div>

        </div>

   
       
    )
}