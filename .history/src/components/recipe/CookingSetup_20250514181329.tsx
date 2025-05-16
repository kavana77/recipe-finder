import Text from "../ui/Text"

const CookingSetup=()=> {
    return(
        <div className="w-[840px] h-[1387px] px-14">
            <Text variant="heading"></Text>
            <ul className="divide">
                <li>
                    <input 
                    type="checkbox"/>
                    <Text></Text>
                    <img/>
                    <Text variant="muted"></Text>
                </li>
            </ul>
        </div>
    )
}
export default CookingSetup