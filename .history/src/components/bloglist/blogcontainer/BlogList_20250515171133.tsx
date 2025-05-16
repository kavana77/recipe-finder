import Text from "@/components/ui/Text"
import { blogList } from "@/utils/constant"




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