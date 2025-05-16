type IBlogList ={
    id: number,
    title:string,
    caption: string,
    image: string,
    author: string,
    date: string
}
const list : IBlogList[]=>[
    {
        id: 1,
        title: "Crochet Projects for Noodle Lovers",
        caption:"Crochet Projects for Noodle Lovers
Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim 
Wade Warren
12 November 2021
10 Vegetarian Recipes To Eat This Month
Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim  
Robert Fox
12 November 2021
Full Guide to Becoming a Professional Chef
Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim  
Dianne Russell
12 November 2021
Simple & Delicious Vegetarian Lasagna
Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim 
Leslie Alexander
12 November 2021
Plantain and Pinto Stew with Aji Verde
Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim  
Courtney Henry
12 November 2021
We’re Hiring a Communications Assistant!
Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim  
Albert Flores
12 November 2021"
    }
]
const BlogList=()=>{
    return(
        <div className="w-[840px] h-[1360px]">BlogList</div>
    )
}
export default BlogList