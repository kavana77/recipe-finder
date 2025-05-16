import Text from "../ui/Text";
import Profile from "../../assets/blogpost/profile.svg"
const PostHeader=()=>{
    return(
        <div className="w-full h-[253px] over">
            <Text variant="heading" className="text-center">Full Guide to Becoming a Professional Chef</Text>
            <div className="w-full h-[40px] flex items-center justify-center gap-10 py-12">
                <div className="flex items-center gap-4">
                    <img src={Profile}/>
                    <p className="text-xs font-semibold">John Smith</p>
                </div>
                <Text variant="muted">15 March 2022</Text>
            </div>
            <Text variant="muted" className="text-center">Lorem ipsum dolar sit, consectetur adipiscing elit. Curebitur ac 
                ultrices odio. Nulla at congue diam, at dignissim turpis.
                Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar
            </Text>
        </div>
    )
}
export default PostHeader;