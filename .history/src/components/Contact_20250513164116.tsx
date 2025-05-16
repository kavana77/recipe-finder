import Text from "./ui/Text"
import Image from "../assets/contact.png"
const Contact=()=>{
    return(
        <div className="w-full h-[733px] px-14 my-16">
            <Text variant="heading" className="text-center">Contact us</Text>
            <div className="flex flex-row">
            <div className="w-[300px] h-[450px] bg-gradient-to-b from-white to-[#dbf3f8] flex items-end justify-end">
                <img src={Image} className="w-[250px] h-[350px] " />
            </div>
            <div>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder="Enter your name..."/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input />
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </form>
            </div>
            </div>
        </div>
        
    )
}
export default Contact