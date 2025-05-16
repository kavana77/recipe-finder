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
        image: ,
        author: "Wade Warren",
        date: "12 November 2021"
    },
    {
        id: 2,
        title: "10 Vegetarian Recipes To Eat This Month",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: ,
        image: ,
        author: "Robert Fox",
        date: "12 November 2021"
    },
    {
        id: 1,
        title: "Crochet Projects for Noodle Lovers",
        caption:"Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        profile: ,
        image: ,
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