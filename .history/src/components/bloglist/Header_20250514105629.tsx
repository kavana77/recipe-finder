import Button from "../ui/Button";
import Text from "../ui/Text";

export default function Header(){
    return(
        <div className="w-full h-[289px] flex flex-col items-center justify-center gap-6">
            <Text variant="heading">Blog & Article</Text>
            <Text variant="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Text>
              <div className="bg-white rounded-2xl w-[450px] h-[50px] flex items-center justify-between  mt-8 border-2 border-gray-300">
                        <input type="email" placeholder="Enter your email" 
                        className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black" />
                        <Button>Subscribe</Button>
                      </div>
        </div>
    )
}