import Text from "@/components/ui/Text"
import List1 from "../../../assets/bloglist/list1.png"
import List2 from "../../../assets/bloglist/list2.png"
import List3 from "../../../assets/bloglist/list3.png"
import List4 from "../../../assets/bloglist/list4.png"
import List5 from "../../../assets/bloglist/list5.png"
import List6 from "../../../assets/bloglist/list6.png"
import Profile1 from "../../../assets/bloglist/profile1.svg"
import Profile2 from "../../../assets/bloglist/profile2.svg"
import Profile3 from "../../../assets/bloglist/profile3.svg"
import Profile4 from "../../../assets/bloglist/profile4.svg"
import Profile5 from "../../../assets/bloglist/profile5.svg"
import Profile6 from "../../../assets/bloglist/profile6.svg"




const BlogList=()=>{
    return(
        <div className="w-[840px] h-[1360px]">
            <div>
                {blogList.map((list)=>(
                    <div key={list.id} className="flex gap-8 my-6">
                        <img src={list.image} className="rounded-3xl"/>
                        <div className="mr-16">
                            <Text className="mt-4">{list.title}</Text>
                            <Text variant="muted" className="my-6">{list.caption}</Text>
                        
                        <div className=" flex items-center gap-6">
                            <div className="flex items-center gap-2">
                            <img src={list.profile}/>
                            <Text variant="muted" className="font-bold text-black">{list.author}</Text>
                            </div>
                            <Text variant="muted">|</Text>
                            <Text variant="muted">{list.date}</Text>
                        </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default BlogList