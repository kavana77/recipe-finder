import Text from "../ui/Text"

const CookingSetup=()=> {
    return(
        <div className="w-[840px] h-[1387px] px-14">
            <Text variant="heading"></Text>
            <ul className="">
                <li>
                    <input 
                    type="checkbox"/>
                    <div>
                    <Text>1.Lorem ipsum dolar sit amet</Text>
                    <Text>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</Text>
                    <img/>
                    <Text variant="muted"></Text>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default CookingSetup