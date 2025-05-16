import Text from "../ui/Text";

const Header=()=>{
    return(
        <div className="w-full h-[1003px]">
            <Text variant="heading">Health Japanese Fried Rice</Text>
            <div className="w-full h-[600px]">
                {/* img */}
                <div className="w-["></div>
                {/* nutrition info */}
                <div className="w-[400px] h-full"></div>
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