import Text from "../ui/Text";
import Image from "../../assets/recipe/header.png"
type INu
const Header=()=>{
    return(
        <div className="w-full h-[1003px] px-14">
            {/* Header */}
            <div>
            <Text variant="heading">Health Japanese Fried Rice</Text>
                <div></div>
            </div>
            <div className="w-full h-[500px] flex gap-12">
                {/* img */}
                    <img src={Image} className="w-[840px] h-full"/>
                {/* nutrition info */}
                <div className="w-[400px] h-full bg-[#E7FAFE] rounded-2xl" >

                </div>
            </div>
            <Text variant="muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum.
            </Text>
        </div>
    )
}
export default Header;