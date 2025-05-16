import List1 from "../../../assets/bloglist/list1.png"
import List2 from "../../../assets/bloglist/list2.png"
import List3 from "../../../assets/bloglist/list3.png"
import List4 from "../../../assets/bloglist/list4.png"
import List5 from "../../../assets/bloglist/list5.png"
import list6 from "../../../assets/bloglist/list6.png"
import 

type IBlogList ={
    id: number,
    title:string,
    caption: string,
    profile: string,
    image: string,
    author: string,
   
}
const list : IBlogList[]=>[
    {
        id: 1,
        title: "Crochet Projects for Noodle Lovers",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: ,
        image:list1 ,
        author: "Wade Warren",
        date: "12 November 2021"
    },
    {
        id: 2,
        title: "10 Vegetarian Recipes To Eat This Month",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: ,
        image:list2 ,
        author: "Robert Fox",
        date: "12 November 2021"
    },
    {
        id: 3,
        title: "Full Guide to Becoming a Professional Chef",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: ,
        image:list3 ,
        author: "Dianne Russell",
        date: "12 November 2021"
    },
    {
        id: 4,
        title: "Simple & Delicious Vegetarian Lasagna",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: ,
        image:list4 ,
        author: "Lesile Alexander",
        date: "12 November 2021"
    },
    {
        id: 5,
        title: "Plantain and Pinto Stew with Aji Verde",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: ,
        image:list5 ,
        author: "Courtney Henry",
        date: "12 November 2021"
    },
    {
        id: 6,
        title: "We're Hiring a Communications Assistant!",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: ,
        image: list6,
        author: "Wade Warren",
        date: "12 November 2021"
    },

]
const BlogList=()=>{
    return(
        <div className="w-[840px] h-[1360px]">BlogList</div>
    )
}
export default BlogList