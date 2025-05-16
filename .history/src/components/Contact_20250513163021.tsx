import Text from "./ui/Text"
import Image from "../assets/contact.png"
const Contact=()=>{
    return(
        <div className="w-full h-[733px] px-14 my-16">
            <Text variant="heading" className="text-center">Contact us</Text>
            <div className="flex flex-row">
            <div className="w-[300px] h-[472px] bg-gradient-to-b from-white to-[#c7eff8] flex items-end justify-end">
                <img src={Image} className="w-[250px] h-full " />
            </div>
            <div>
                <form>
                    <input></input>
                </form>
            </div>
            </div>
        </div>
        
    )
}
export default Contact