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


type IBlogList ={
    id: number,
    title:string,
    caption: string,
    profile: string,
    image: string,
    author: string,
    date: string
   
}
const blogList : IBlogList[]=[
    {
        id: 1,
        title: "Crochet Projects for Noodle Lovers",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: Profile1 ,
        image:List1 ,
        author: "Wade Warren",
        date: "12 November 2021",
    },
    {
        id: 2,
        title: "10 Vegetarian Recipes To Eat This Month",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile:Profile2 ,
        image:List2 ,
        author: "Robert Fox",
        date: "12 November 2021"
    },
    {
        id: 3,
        title: "Full Guide to Becoming a Professional Chef",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: Profile3,
        image:List3 ,
        author: "Dianne Russell",
        date: "12 November 2021"
    },
    {
        id: 4,
        title: "Simple & Delicious Vegetarian Lasagna",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: Profile4,
        image:List4 ,
        author: "Lesile Alexander",
        date: "12 November 2021"
    },
    {
        id: 5,
        title: "Plantain and Pinto Stew with Aji Verde",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: Profile5 ,
        image:List5 ,
        author: "Courtney Henry",
        date: "12 November 2021"
    },
    {
        id: 6,
        title: "We're Hiring a Communications Assistant!",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: Profile6,
        image: List6,
        author: "Wade Warren",
        date: "12 November 2021"
    },

]
const BlogList=()=>{
    return(
        <div className="w-[840px] h-[1360px]">
            <div>
                {blogList.map((list)=>(
                    <div key={list.id} className="flex">
                        <img src={list.image}/>
                        <div>
                            <Text>{list.title}</Text>
                            <Text variant="muted">{list.caption}</Text>
                        
                        <div>
                            <div>
                            <img src={list.profile}/>
                            <Text variant="muted" className="font-bold">{list.author}</Text>
                            </div>
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