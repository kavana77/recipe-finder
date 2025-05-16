import Text from "./ui/Text"
import Image from "../assets/contact.png"
const Contact=()=>{
    return(
        <div className="w-full h-[733px] px-14 my-16">
            <Text variant="heading" className="text-center">Contact us</Text>
            <div className="flex flex-row gap-14">
            <div className="w-[300px] h-[450px] bg-gradient-to-b from-white to-[#dbf3f8] flex items-end justify-end">
                <img src={Image} className="w-[250px] h-[350px] " />
            </div>
            
                <form className="w-[840px]">
                <div className=" flex flex-roe">
                    <div className="flex flex-col">
                        <label>NAME</label>
                        <input type="text" placeholder="Enter your name..." required 
                        className="p-3 rounded-md border-gray-500 border-1"/>
                    </div>
                    <div className="flex flex-col">
                        <label>EMAIL ADDRESS</label>
                        <input type="email" placeholder="Your email address" required 
                        className="p-3 rounded-md border-gray-500 border-1"/>
                    </div>
                    <div className="flex flex-col">
                        <label>SUBJECT</label>
                        <input type="text" placeholder="Enter Subject"
                        className="p-3 rounded-md border-gray-500 border-1"/>
                    </div>
                    <div className="flex flex-col">
                        <label>ENQUIRY TYPE</label>
                        <input type="text" placeholder="Advertising" required
                        className="p-3 rounded-md border-gray-500 border-1"/>
                    </div>
                    <div className="flex flex-col">
                        <label> MESSAGE</label>
                        <textarea placeholder="Enter your message.."
                        rows={6}
                        className="p-3 rounded-md border-gray-500 border-1"
                         required></textarea>
                    </div>
                    </div>
                </form>
            
            </div>
        </div>
        
    )
}
export default Contact