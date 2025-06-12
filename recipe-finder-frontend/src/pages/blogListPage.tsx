import BlogContainer from "@/components/bloglist/blogcontainer/BlogContainer";
import Pagination from "@/components/bloglist/Pagination";
import Header from "@/components/bloglist/Header";
import SubscribeCard from "@/components/common/SubscribeCard";

const BlogListPage=()=>{
    return(
        <>
            <Header/>
            <BlogContainer/>
            <Pagination/>
            <SubscribeCard/>

        </>
    )
}
export default BlogListPage