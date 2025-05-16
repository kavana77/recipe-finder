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
        title: "Crochet Projects for Noodle Lover"
    }
]
const BlogList=()=>{
    return(
        <div className="w-[840px] h-[1360px]">BlogList</div>
    )
}
export default BlogList